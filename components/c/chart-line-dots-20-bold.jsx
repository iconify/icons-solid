import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w01dflzvf.css';
import '../../css/y/y5lz0kbah.css';
import '../../css/m/mv7ibobfu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w01dflzvf"/><path class="y5lz0kbah"/><path class="mv7ibobfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-line-dots-20-bold"} {...others} />);
}

export default Component;
