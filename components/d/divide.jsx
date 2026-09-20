import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajsn0ftzb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ajsn0ftzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:divide"} {...others} />);
}

export default Component;
