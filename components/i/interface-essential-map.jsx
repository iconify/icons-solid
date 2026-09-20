import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzzfaoeme.css';
import '../../css/n/n9kcvmbeu.css';
import '../../css/p/p5lazdb_r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bzzfaoeme"/><path class="n9kcvmbeu"/><path class="p5lazdb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-map"} {...others} />);
}

export default Component;
