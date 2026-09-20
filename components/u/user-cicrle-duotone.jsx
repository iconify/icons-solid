import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adezxkbcn.css';
import '../../css/h/hana-fm8g.css';
import '../../css/w/wusbso8md.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="adezxkbcn"/><circle class="hana-fm8g"/><path clip-rule="evenodd" class="wusbso8md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-cicrle-duotone"} {...others} />);
}

export default Component;
