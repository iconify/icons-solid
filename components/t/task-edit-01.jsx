import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ak25ps3qf.css';
import '../../css/r/rh0uhrcgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ak25ps3qf"/><path class="rh0uhrcgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:task-edit-01"} {...others} />);
}

export default Component;
