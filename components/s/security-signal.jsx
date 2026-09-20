import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skvj_eznm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="skvj_eznm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:security-signal"} {...others} />);
}

export default Component;
