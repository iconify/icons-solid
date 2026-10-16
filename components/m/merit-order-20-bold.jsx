import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w01dflzvf.css';
import '../../css/m/m4k8fxb9u.css';
import '../../css/q/q3l70xbjo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w01dflzvf"/><path class="m4k8fxb9u"/><path class="q3l70xbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:merit-order-20-bold"} {...others} />);
}

export default Component;
