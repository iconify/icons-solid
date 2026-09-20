import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4bb7ybtz.css';
import '../../css/x/xns9x_bfv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f4bb7ybtz"/><path class="xns9x_bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-pytorch-open"} {...others} />);
}

export default Component;
