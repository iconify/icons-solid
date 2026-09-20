import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t5y1r5fnn.css';
import '../../css/o/o9v78wbjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t5y1r5fnn"/><path class="o9v78wbjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:beer-opener"} {...others} />);
}

export default Component;
