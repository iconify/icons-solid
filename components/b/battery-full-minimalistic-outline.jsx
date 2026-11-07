import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maw4ikbnh.css';
import '../../css/y/yn4p-lbjx.css';
import '../../css/t/tjhcftl1w.css';
import '../../css/o/osemxebgc.css';
import '../../css/j/jy0yf6bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="maw4ikbnh"/><path class="yn4p-lbjx"/><path class="tjhcftl1w"/><path clip-rule="evenodd" class="osemxebgc"/><path class="jy0yf6bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-full-minimalistic-outline"} {...others} />);
}

export default Component;
