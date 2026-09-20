import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja3mrtbir.css';
import '../../css/n/nmhwd39xk.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ja3mrtbir"/><path class="nmhwd39xk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:key-fill"} {...others} />);
}

export default Component;
