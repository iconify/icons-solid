import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c60-6kb4c.css';
import '../../css/z/ziz-v20vb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c60-6kb4c"/><path class="ziz-v20vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qwik-dark"} {...others} />);
}

export default Component;
