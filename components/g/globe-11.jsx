import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l377ax9ox.css';
import '../../css/e/elc9xubaq.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="l377ax9ox"/><path class="elc9xubaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:globe-11"} {...others} />);
}

export default Component;
