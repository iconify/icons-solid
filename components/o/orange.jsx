import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut5alpn7y.css';
import '../../css/a/ayvad0bop.css';
import '../../css/s/sk2004k5x.css';
import '../../css/b/btafzwbih.css';
import '../../css/w/w7tooacnu.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ut5alpn7y"/><path class="ayvad0bop"/><path class="sk2004k5x"/><path class="btafzwbih"/><path class="w7tooacnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:orange"} {...others} />);
}

export default Component;
