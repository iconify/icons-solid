import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzqkn_xju.css';
import '../../css/q/q-on95byi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kzqkn_xju"/><path class="q-on95byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:deno"} {...others} />);
}

export default Component;
