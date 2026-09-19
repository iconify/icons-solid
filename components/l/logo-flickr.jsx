import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjqtc9kwq.css';
import '../../css/n/nod8k7bwo.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="sjqtc9kwq"/><circle class="nod8k7bwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-flickr"} {...others} />);
}

export default Component;
