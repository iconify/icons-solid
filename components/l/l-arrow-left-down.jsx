import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ifqhwlyab.css';
import '../../css/f/f_pzl9xla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ifqhwlyab"/><path class="f_pzl9xla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:l-arrow-left-down"} {...others} />);
}

export default Component;
