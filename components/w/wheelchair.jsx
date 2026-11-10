import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gdjtjpfed.css';
import '../../css/w/wwijzbceg.css';
import '../../css/l/l-_lu6bxo.css';
import '../../css/e/ehvwm-b-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gdjtjpfed"/><path class="wwijzbceg"/><path class="l-_lu6bxo"/><path class="ehvwm-b-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:wheelchair"} {...others} />);
}

export default Component;
