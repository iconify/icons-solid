import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/murjelbxg.css';
import '../../css/y/y_31qtbyx.css';
import '../../css/x/xoiqtfx8i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="murjelbxg"/><path class="y_31qtbyx"/><path class="xoiqtfx8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heavy-equals-sign"} {...others} />);
}

export default Component;
