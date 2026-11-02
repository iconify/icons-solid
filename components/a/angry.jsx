import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zk7ympqlg.css';
import '../../css/g/gmdedcz7v.css';
import '../../css/e/e7ni4pbwh.css';
import '../../css/v/vht-czbwo.css';
import '../../css/h/h7t1avmuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="zk7ympqlg"/><path class="gmdedcz7v"/><path class="e7ni4pbwh"/><path class="vht-czbwo"/><path class="h7t1avmuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:angry"} {...others} />);
}

export default Component;
