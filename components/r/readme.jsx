import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az-hr7b_r.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="az-hr7b_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:readme"} {...others} />);
}

export default Component;
