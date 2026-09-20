import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sc5h-7bek.css';
import '../../css/f/figgh997t.css';
import '../../css/x/xkvmjygai.css';
import '../../css/t/t2bo1bcih.css';
import '../../css/q/qe0szlqcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sc5h-7bek"/><path class="figgh997t"/><path class="xkvmjygai"/><path class="t2bo1bcih"/><path class="qe0szlqcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:spaceship"} {...others} />);
}

export default Component;
