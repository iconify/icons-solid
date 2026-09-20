import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sonzv-b6i.css';
import '../../css/y/y41okqbrh.css';
import '../../css/e/e1nqa7bmg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sonzv-b6i"/><path class="y41okqbrh"/><path class="e1nqa7bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:coolify-light"} {...others} />);
}

export default Component;
