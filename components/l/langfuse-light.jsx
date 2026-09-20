import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxkuzfo0h.css';
import '../../css/a/agf0fzowr.css';
import '../../css/z/z6ht7j0ad.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wxkuzfo0h"/><path class="agf0fzowr"/><path class="z6ht7j0ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:langfuse-light"} {...others} />);
}

export default Component;
