import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bxts4hbjc.css';
import '../../css/p/pewbfpkud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bxts4hbjc"/><path class="pewbfpkud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-edit-02"} {...others} />);
}

export default Component;
