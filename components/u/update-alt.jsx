import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-pmcc75q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k-pmcc75q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:update-alt"} {...others} />);
}

export default Component;
