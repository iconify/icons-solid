import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b_klw6bbu.css';
import '../../css/e/eod_h2pyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b_klw6bbu"/><path class="eod_h2pyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:settings"} {...others} />);
}

export default Component;
