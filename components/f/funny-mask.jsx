import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7xx3gbgc.css';
import '../../css/l/l37xwkbme.css';
import '../../css/f/fhjxnntel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e7xx3gbgc"/><path class="l37xwkbme"/><path class="fhjxnntel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:funny-mask"} {...others} />);
}

export default Component;
