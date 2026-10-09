import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwaplabmu.css';
import '../../css/o/o-xjgxbux.css';
import '../../css/y/yl2ujob7n.css';
import '../../css/z/z65fwkbap.css';
import '../../css/d/djjvp7y2z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gwaplabmu"/><path class="o-xjgxbux"/><path class="yl2ujob7n"/><path class="z65fwkbap"/><path class="djjvp7y2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-handover-20"} {...others} />);
}

export default Component;
