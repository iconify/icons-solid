import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z-k-tgbdh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/h/h7hbobcdx.css';
import '../../css/u/ubfykzbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z-k-tgbdh"/><path class="gshkn9qqt"/><path class="h7hbobcdx"/><path class="ubfykzbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-circle-linear"} {...others} />);
}

export default Component;
