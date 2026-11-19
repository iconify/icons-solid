import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiivxj9lp.css';
import '../../css/v/vhdrq4p5a.css';
import '../../css/k/ktngdibwo.css';
import '../../css/r/rmz5a9b2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qiivxj9lp"/><path class="vhdrq4p5a"/><path class="ktngdibwo"/><path class="rmz5a9b2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:direction-turn-u"} {...others} />);
}

export default Component;
