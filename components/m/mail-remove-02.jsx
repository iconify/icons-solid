import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao6q-ib-y.css';
import '../../css/r/r5-80cban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ao6q-ib-y"/><path class="r5-80cban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-remove-02"} {...others} />);
}

export default Component;
