import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_ci2_etv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d_ci2_etv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:lock-open-16-solid"} {...others} />);
}

export default Component;
