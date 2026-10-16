import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh8gpb9au.css';
import '../../css/o/op_jlg5nw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vh8gpb9au"/><path class="op_jlg5nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-parking-48-bold"} {...others} />);
}

export default Component;
