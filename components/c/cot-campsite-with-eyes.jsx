import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnab4-blq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cnab4-blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cot-campsite-with-eyes"} {...others} />);
}

export default Component;
