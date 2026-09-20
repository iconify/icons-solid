import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k81q3hz4j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k81q3hz4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:rectangle-under-arrow-up-beside-arrow-down"} {...others} />);
}

export default Component;
