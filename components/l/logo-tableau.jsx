import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtzdz7blb.css';
import '../../css/l/l06wekb2j.css';
import '../../css/f/ff7iaab8c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vtzdz7blb"/><path class="l06wekb2j"/><path class="ff7iaab8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-tableau"} {...others} />);
}

export default Component;
