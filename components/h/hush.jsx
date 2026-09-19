import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v4cdqwbvw.css';
import '../../css/v/v4vk_jbvs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="v4cdqwbvw"/><path class="v4vk_jbvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:hush"} {...others} />);
}

export default Component;
