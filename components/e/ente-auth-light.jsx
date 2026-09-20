import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn-2fcubd.css';
import '../../css/c/cia5ouwnr.css';
import '../../css/v/vu75sh_8v.css';
import '../../css/a/a5ynwdbbs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bn-2fcubd"/><path class="cia5ouwnr"/><path class="vu75sh_8v"/><path class="a5ynwdbbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-auth-light"} {...others} />);
}

export default Component;
