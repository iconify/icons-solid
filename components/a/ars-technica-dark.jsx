import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjqz-ibde.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kjqz-ibde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ars-technica-dark"} {...others} />);
}

export default Component;
