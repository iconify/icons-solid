import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4v8ixnew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4v8ixnew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:rocky-linux"} {...others} />);
}

export default Component;
