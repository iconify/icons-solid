import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8isv-k1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p8isv-k1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:flipboard-logo"} {...others} />);
}

export default Component;
