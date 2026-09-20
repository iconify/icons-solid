import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tly_ixbgg.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-3};
const content = `<path class="tly_ixbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:pen-f"} {...others} />);
}

export default Component;
