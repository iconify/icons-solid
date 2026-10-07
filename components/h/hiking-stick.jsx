import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyr_xvayy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uyr_xvayy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hiking-stick"} {...others} />);
}

export default Component;
