import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulf186bsh.css';
import '../../css/a/adm80pb1z.css';
import '../../css/f/f958kxxgy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ulf186bsh"/><path class="adm80pb1z"/><path class="f958kxxgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airport-20"} {...others} />);
}

export default Component;
