import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdkmvbb9q.css';
import '../../css/h/hk1pnd3sk.css';
import '../../css/u/uvsf3cc9p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sdkmvbb9q"/><path class="hk1pnd3sk"/><path class="uvsf3cc9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-valve-48-bold"} {...others} />);
}

export default Component;
