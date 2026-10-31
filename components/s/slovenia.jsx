import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqpgm2b4p.css';
import '../../css/w/wprsklb5k.css';
import '../../css/k/kso7jdowc.css';
import '../../css/j/jkgsd16at.css';
import '../../css/j/jomrzj24o.css';
import '../../css/j/jr3-37t6a.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="xqpgm2b4p"/><path class="wprsklb5k"/><path class="kso7jdowc"/><path class="jkgsd16at"/><path class="jomrzj24o"/><path class="jr3-37t6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:slovenia"} {...others} />);
}

export default Component;
