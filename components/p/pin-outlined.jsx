import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7u5rm1fs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k7u5rm1fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:pin-outlined"} {...others} />);
}

export default Component;
