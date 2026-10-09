import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdclrrbld.css';
import '../../css/z/zu1wjac1t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kdclrrbld"/><path class="zu1wjac1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pier-48-bold"} {...others} />);
}

export default Component;
