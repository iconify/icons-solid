import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj-lznb8w.css';
import '../../css/h/hq5gb_4kr.css';
import '../../css/i/iv7xugjxy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oj-lznb8w"/><path class="hq5gb_4kr"/><path class="iv7xugjxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:heyform"} {...others} />);
}

export default Component;
