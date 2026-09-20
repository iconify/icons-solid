import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2e05bcja.css';
import '../../css/j/juj0211vf.css';
import '../../css/z/zpr4ze31r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d2e05bcja"/><path class="juj0211vf"/><path class="zpr4ze31r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:colota-light"} {...others} />);
}

export default Component;
