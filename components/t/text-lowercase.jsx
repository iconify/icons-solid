import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n6k_2xfru.css';
import '../../css/a/axfu3nbye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n6k_2xfru"/><path class="axfu3nbye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-lowercase"} {...others} />);
}

export default Component;
