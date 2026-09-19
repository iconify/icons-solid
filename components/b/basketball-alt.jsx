import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qgajy22ee.css';
import '../../css/f/fxn-nbfom.css';
import '../../css/v/vac8d1bao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qgajy22ee"/><path class="fxn-nbfom"/><path class="vac8d1bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:basketball-alt"} {...others} />);
}

export default Component;
