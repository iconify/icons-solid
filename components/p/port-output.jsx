import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp_wowb2j.css';
import '../../css/l/lt2mkcbkk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pp_wowb2j"/><path class="lt2mkcbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:port-output"} {...others} />);
}

export default Component;
