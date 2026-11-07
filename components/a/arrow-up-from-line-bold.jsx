import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm2cgjbbr.css';
import '../../css/v/vh0_98nmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nm2cgjbbr"/><path class="vh0_98nmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-from-line-bold"} {...others} />);
}

export default Component;
