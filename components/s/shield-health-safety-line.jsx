import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bscp3lbwa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bscp3lbwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:shield-health-safety-line"} {...others} />);
}

export default Component;
