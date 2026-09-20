import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bzs2wqgnu.css';
import '../../css/s/sfb2l6beq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bzs2wqgnu"/><path class="sfb2l6beq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tea-pot"} {...others} />);
}

export default Component;
