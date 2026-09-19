import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcz4m5c4m.css';

const viewBox = {"width":20,"height":20};
const content = `<circle class="kcz4m5c4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:circle-filled"} {...others} />);
}

export default Component;
