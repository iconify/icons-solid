import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1jix6p0z.css';
import '../../css/x/xw4xmi69j.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="i1jix6p0z"/><path class="xw4xmi69j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:mobile-4"} {...others} />);
}

export default Component;
