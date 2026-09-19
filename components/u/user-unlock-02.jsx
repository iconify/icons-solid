import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bumj59npk.css';
import '../../css/x/xocox8yzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="bumj59npk"/><path class="xocox8yzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-unlock-02"} {...others} />);
}

export default Component;
