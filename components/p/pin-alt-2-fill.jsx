import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj6zkua8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yj6zkua8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:pin-alt-2-fill"} {...others} />);
}

export default Component;
