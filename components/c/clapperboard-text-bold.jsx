import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0d2howua.css';
import '../../css/v/vmiwmz8tp.css';
import '../../css/g/glyc0obms.css';
import '../../css/f/fmncdibdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0d2howua"/><path class="vmiwmz8tp"/><path clip-rule="evenodd" class="glyc0obms"/><path class="fmncdibdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-text-bold"} {...others} />);
}

export default Component;
