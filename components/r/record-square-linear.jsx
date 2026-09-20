import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z-k-tgbdh.css';
import '../../css/h/h7hbobcdx.css';
import '../../css/u/ubfykzbta.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z-k-tgbdh"/><path class="h7hbobcdx"/><path class="ubfykzbta"/><path class="pw8f5c0fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-square-linear"} {...others} />);
}

export default Component;
