import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/f/f4cxkrzqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="f4cxkrzqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-button-circle-left"} {...others} />);
}

export default Component;
