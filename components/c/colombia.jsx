import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j648mcboz.css';
import '../../css/i/iiv7b4kfn.css';
import '../../css/j/jggsly9mc.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="j648mcboz"/><path class="iiv7b4kfn"/><path class="jggsly9mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:colombia"} {...others} />);
}

export default Component;
