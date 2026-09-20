import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/g0krt4bbi.css';
import '../../css/t/tusdoybin.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="g0krt4bbi"/><path clip-rule="evenodd" class="tusdoybin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:wifi"} {...others} />);
}

export default Component;
