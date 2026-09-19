import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygd2uvbqw.css';
import '../../css/f/fpb-29h3j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ygd2uvbqw"/><path class="fpb-29h3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:cursor"} {...others} />);
}

export default Component;
