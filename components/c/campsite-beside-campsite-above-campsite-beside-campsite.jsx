import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn0mf_rjg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kn0mf_rjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-beside-campsite-above-campsite-beside-campsite"} {...others} />);
}

export default Component;
