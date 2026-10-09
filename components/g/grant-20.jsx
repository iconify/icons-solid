import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6jxk8z4w.css';
import '../../css/g/gd0tfm6iv.css';
import '../../css/k/k37vjebfo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x6jxk8z4w"/><path class="gd0tfm6iv"/><path class="k37vjebfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grant-20"} {...others} />);
}

export default Component;
