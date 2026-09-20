import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c5stiqb0u.css';
import '../../css/a/arkya8uwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c5stiqb0u"/><path class="arkya8uwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bag-b"} {...others} />);
}

export default Component;
