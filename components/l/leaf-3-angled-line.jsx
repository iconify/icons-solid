import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn2855mwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hn2855mwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:leaf-3-angled-line"} {...others} />);
}

export default Component;
