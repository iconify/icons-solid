import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5glt9glt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p5glt9glt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:leroy-merlin"} {...others} />);
}

export default Component;
