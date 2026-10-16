import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-lmpi58f.css';
import '../../css/u/uqtphxb9b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q-lmpi58f"/><path class="uqtphxb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-waste-48-bold"} {...others} />);
}

export default Component;
