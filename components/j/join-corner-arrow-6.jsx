import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc_8fq-co.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gc_8fq-co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:join-corner-arrow-6"} {...others} />);
}

export default Component;
