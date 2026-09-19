import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9vad2brh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkcukxw1e.css';
import '../../css/m/md286fbip.css';

const viewBox = {"width":32,"height":32};
const content = `<defs><path id="SVGBKaMBekK" class="c9vad2brh"/></defs><g class="ft5dv1b6b"><circle class="wkcukxw1e"/><g class="md286fbip"><use href="#SVGBKaMBekK"/><use href="#SVGBKaMBekK"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ost"} {...others} />);
}

export default Component;
