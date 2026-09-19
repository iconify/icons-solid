import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p-7oghbwj.css';
import '../../css/b/bf6nontsy.css';
import '../../css/l/l2agplb8a.css';
import '../../css/m/mjh9l4bmz.css';
import '../../css/o/o731z77nb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4GYOae4z"><g class="wwvp95byt"><path class="p-7oghbwj"/><path class="bf6nontsy"/><path class="l2agplb8a"/><path class="mjh9l4bmz"/><path class="o731z77nb"/></g></mask></defs><path mask="url(#SVG4GYOae4z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:notebook-and-pen"} {...others} />);
}

export default Component;
