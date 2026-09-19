import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hl471tb-q.css';
import '../../css/h/hf3pd9fjs.css';
import '../../css/d/digy0rbjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hl471tb-q"/><path class="hf3pd9fjs"/><path class="digy0rbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:house-02"} {...others} />);
}

export default Component;
