import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwmlxiynb.css';
import '../../css/j/jdfmcfbkc.css';
import '../../css/y/yy8aoacbq.css';
import '../../css/e/efnborbkf.css';
import '../../css/f/feuxlfrmn.css';
import '../../css/d/deicl5brl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwmlxiynb"/><path clip-rule="evenodd" class="jdfmcfbkc"/><path class="yy8aoacbq"/><path class="efnborbkf"/><path class="feuxlfrmn"/><path clip-rule="evenodd" class="deicl5brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fida"} {...others} />);
}

export default Component;
