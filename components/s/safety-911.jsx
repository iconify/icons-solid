import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxnide8qa.css';
import '../../css/r/r6f13h30v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yxnide8qa"/><path class="r6f13h30v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:safety-911"} {...others} />);
}

export default Component;
