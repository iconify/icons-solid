import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nh4ohj8im.css';
import '../../css/s/ssawt1dql.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="nh4ohj8im"/><path class="ssawt1dql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:zcl"} {...others} />);
}

export default Component;
