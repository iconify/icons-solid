import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1j4c2b7k.css';
import '../../css/g/gobrdmske.css';
import '../../css/t/t4uhcxbvm.css';
import '../../css/g/gpwengbuk.css';
import '../../css/h/hq7i28aum.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s1j4c2b7k"/><path class="gobrdmske"/><rect transform="rotate(180 20 16)" class="t4uhcxbvm"/><path class="gpwengbuk"/><path class="hq7i28aum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:figma"} {...others} />);
}

export default Component;
