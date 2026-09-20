import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvibj51bk.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2.5};
const content = `<path class="pvibj51bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:pin-f"} {...others} />);
}

export default Component;
