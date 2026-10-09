import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5xztqbch.css';
import '../../css/o/orxho49no.css';
import '../../css/k/kfbs23bbk.css';
import '../../css/r/rdzvzrz1f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w5xztqbch"/><path class="orxho49no"/><path class="kfbs23bbk"/><path class="rdzvzrz1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-well-20-bold"} {...others} />);
}

export default Component;
