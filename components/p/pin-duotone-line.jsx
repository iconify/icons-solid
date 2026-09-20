import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq5omkbde.css';
import '../../css/u/u4crvcq6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fq5omkbde"/><path class="u4crvcq6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pin-duotone-line"} {...others} />);
}

export default Component;
