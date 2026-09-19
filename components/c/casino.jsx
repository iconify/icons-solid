import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u30ldabiv.css';
import '../../css/m/mydhkgbks.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u30ldabiv"/><path class="mydhkgbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:casino"} {...others} />);
}

export default Component;
