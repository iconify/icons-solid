import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_rr6xiqh.css';
import '../../css/l/lejmcbbfw.css';
import '../../css/o/oui96b1vm.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="z_rr6xiqh"/><path class="lejmcbbfw"/><path class="oui96b1vm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:egg"} {...others} />);
}

export default Component;
