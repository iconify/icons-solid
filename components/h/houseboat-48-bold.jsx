import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnmq2wbpk.css';
import '../../css/g/geai1620k.css';
import '../../css/v/v8pb6_0jz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tnmq2wbpk"/><path class="geai1620k"/><path class="v8pb6_0jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:houseboat-48-bold"} {...others} />);
}

export default Component;
