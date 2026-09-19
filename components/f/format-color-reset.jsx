import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smmymf_ne.css';

const viewBox = {"width":344,"height":392};
const content = `<path class="smmymf_ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:format-color-reset"} {...others} />);
}

export default Component;
