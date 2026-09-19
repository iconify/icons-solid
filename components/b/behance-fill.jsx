import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w--sykbuv.css';
import '../../css/i/ik2-15cxs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w--sykbuv"/><path class="ik2-15cxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:behance-fill"} {...others} />);
}

export default Component;
