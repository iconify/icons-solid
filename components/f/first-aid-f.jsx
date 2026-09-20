import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc4as8vip.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};
const content = `<path class="bc4as8vip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:first-aid-f"} {...others} />);
}

export default Component;
