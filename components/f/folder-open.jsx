import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsv66-bey.css';
import '../../css/f/f3nwbjeex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qsv66-bey"/><path class="f3nwbjeex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:folder-open"} {...others} />);
}

export default Component;
