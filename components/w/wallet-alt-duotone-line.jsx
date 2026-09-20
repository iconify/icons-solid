import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l10su6f3a.css';
import '../../css/s/s6jk32b5k.css';
import '../../css/c/c25nhu92o.css';
import '../../css/b/bpiis4b2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l10su6f3a"/><path class="s6jk32b5k"/><path class="c25nhu92o"/><path class="bpiis4b2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:wallet-alt-duotone-line"} {...others} />);
}

export default Component;
