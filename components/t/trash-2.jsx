import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/sanzuhblu.css';
import '../../css/t/tpbdo1ghu.css';
import '../../css/a/a39c_hb3c.css';
import '../../css/q/qz1d2ov5n.css';
import '../../css/y/ya0rtreoh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="sanzuhblu"/><path class="tpbdo1ghu"/><path class="a39c_hb3c"/><path class="qz1d2ov5n"/><path class="ya0rtreoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:trash-2"} {...others} />);
}

export default Component;
