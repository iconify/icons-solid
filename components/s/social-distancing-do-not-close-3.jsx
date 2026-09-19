import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ofpoembdd.css';
import '../../css/d/d27zkrbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ofpoembdd"/><path class="d27zkrbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-do-not-close-3"} {...others} />);
}

export default Component;
