import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aakhlnb9u.css';
import '../../css/o/owcf5bcdo.css';
import '../../css/d/do50ru8kz.css';
import '../../css/i/i5l2-s5us.css';
import '../../css/i/iu4yofbqh.css';
import '../../css/l/lzo-wxvhe.css';
import '../../css/w/w-_x95-vl.css';
import '../../css/e/e-vx2gb-z.css';
import '../../css/l/l8rwvr8il.css';
import '../../css/j/j3sjv2bdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aakhlnb9u"/><path class="owcf5bcdo"/><circle class="do50ru8kz"/><circle class="i5l2-s5us"/><circle class="iu4yofbqh"/><circle class="lzo-wxvhe"/><circle class="w-_x95-vl"/><circle class="e-vx2gb-z"/><circle class="l8rwvr8il"/><path class="j3sjv2bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:calculator-1"} {...others} />);
}

export default Component;
