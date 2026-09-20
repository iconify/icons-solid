import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srkozk11h.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="srkozk11h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:square-shape"} {...others} />);
}

export default Component;
