import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1n3j_hwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1n3j_hwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:autohotkey"} {...others} />);
}

export default Component;
