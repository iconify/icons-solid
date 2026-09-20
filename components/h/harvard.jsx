import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsdbv17zy.css';

const viewBox = {"width":1400.1,"height":452.4,"left":-0.03,"top":-0.03};
const content = `<path class="wsdbv17zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:harvard"} {...others} />);
}

export default Component;
