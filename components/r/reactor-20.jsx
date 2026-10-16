import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g96qynbtf.css';
import '../../css/y/yqg61wbkr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g96qynbtf"/><path class="yqg61wbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reactor-20"} {...others} />);
}

export default Component;
