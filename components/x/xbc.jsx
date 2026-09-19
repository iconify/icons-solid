import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ehzg4rp2c.css';
import '../../css/w/wuvaihb8t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ehzg4rp2c"/><path class="wuvaihb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xbc"} {...others} />);
}

export default Component;
