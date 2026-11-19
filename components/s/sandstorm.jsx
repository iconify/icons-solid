import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjfl6l1rp.css';
import '../../css/b/bjozrgt8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jjfl6l1rp"/><path class="bjozrgt8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sandstorm"} {...others} />);
}

export default Component;
