import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qhyii4brw.css';
import '../../css/p/ppbdtfbyp.css';
import '../../css/u/ukce0gr5b.css';
import '../../css/v/vluk53bvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="qhyii4brw"/><path class="ppbdtfbyp"/><path class="ukce0gr5b"/><path class="vluk53bvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:alarm-clock"} {...others} />);
}

export default Component;
