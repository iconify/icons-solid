import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z28x9zbap.css';
import '../../css/u/u_5xkab7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z28x9zbap"/><path class="u_5xkab7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-edit-02"} {...others} />);
}

export default Component;
