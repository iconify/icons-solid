import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3l4fgb5a.css';
import '../../css/k/k8xg7x5nk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3l4fgb5a"/><path class="k8xg7x5nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:buildings-filled"} {...others} />);
}

export default Component;
