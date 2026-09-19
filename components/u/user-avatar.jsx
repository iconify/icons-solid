import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt-zv9ths.css';
import '../../css/u/uzucf_p2p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pt-zv9ths"/><path class="uzucf_p2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:user-avatar"} {...others} />);
}

export default Component;
