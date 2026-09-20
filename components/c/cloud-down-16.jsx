import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnnwbubkj.css';
import '../../css/g/g77ln7-3a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dnnwbubkj"/><path class="g77ln7-3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cloud-down-16"} {...others} />);
}

export default Component;
