import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/z1927kswi.css';
import '../../css/m/m8sa_8aqs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="z1927kswi"/><path class="m8sa_8aqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graph-arrow-user-increase"} {...others} />);
}

export default Component;
