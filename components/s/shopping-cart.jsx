import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kjz6ucc4j.css';
import '../../css/d/dmda8q39s.css';
import '../../css/e/er5tkr_vy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="kjz6ucc4j"/><path class="dmda8q39s"/><path class="er5tkr_vy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:shopping-cart"} {...others} />);
}

export default Component;
