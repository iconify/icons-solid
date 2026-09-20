import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1edu7bqk.css';
import '../../css/m/mf8977brh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="z1edu7bqk"/><path clip-rule="evenodd" class="mf8977brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:square-2-16"} {...others} />);
}

export default Component;
