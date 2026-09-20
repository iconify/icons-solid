import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9v7t8xls.css';
import '../../css/o/os0e1fbdn.css';

const viewBox = {"width":512,"height":213};
const content = `<path class="h9v7t8xls"/><path class="os0e1fbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ember"} {...others} />);
}

export default Component;
