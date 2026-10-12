import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl_ia6bco.css';
import '../../css/h/h3hh3dbwv.css';
import '../../css/i/i7t9jgzrw.css';
import '../../css/x/xwdhawfba.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yl_ia6bco"/><path class="h3hh3dbwv"/><path class="i7t9jgzrw"/><path class="xwdhawfba"/><path class="hayl1lfmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-plus-20-bold"} {...others} />);
}

export default Component;
