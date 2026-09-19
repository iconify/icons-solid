import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1dhfvbmz.css';
import '../../css/c/cymo4yqyv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k1dhfvbmz"/><path class="cymo4yqyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:partition-repartition"} {...others} />);
}

export default Component;
