import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ib0yc8bbq.css';
import '../../css/q/qd3yxt-_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ib0yc8bbq"/><path class="qd3yxt-_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:files-02"} {...others} />);
}

export default Component;
