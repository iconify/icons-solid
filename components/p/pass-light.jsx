import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bbg_e0beb.css';
import '../../css/c/czb17zbdq.css';
import '../../css/a/ablr-2bmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="bbg_e0beb"/><circle class="czb17zbdq"/><path class="ablr-2bmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pass-light"} {...others} />);
}

export default Component;
