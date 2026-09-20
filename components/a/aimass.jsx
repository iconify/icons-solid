import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6099ob0e.css';
import '../../css/h/hjmckqb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6099ob0e"/><path class="hjmckqb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aimass"} {...others} />);
}

export default Component;
