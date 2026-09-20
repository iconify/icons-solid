import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyfg24c1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyfg24c1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:unpin-fill"} {...others} />);
}

export default Component;
