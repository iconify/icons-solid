import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jlg_psa6a.css';
import '../../css/q/q64t3f4kb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jlg_psa6a"/><path class="q64t3f4kb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-done-01"} {...others} />);
}

export default Component;
