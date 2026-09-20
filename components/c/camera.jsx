import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgvdncbht.css';
import '../../css/s/sz375c7xk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dgvdncbht"/><path class="sz375c7xk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:camera"} {...others} />);
}

export default Component;
