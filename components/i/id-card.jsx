import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pg5fd5b1w.css';
import '../../css/o/o97t9zbll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pg5fd5b1w"/><path class="o97t9zbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:id-card"} {...others} />);
}

export default Component;
