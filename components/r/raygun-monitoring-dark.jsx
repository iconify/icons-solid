import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hradzg3vi.css';
import '../../css/n/norpj8pcf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hradzg3vi"/><path class="norpj8pcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raygun-monitoring-dark"} {...others} />);
}

export default Component;
