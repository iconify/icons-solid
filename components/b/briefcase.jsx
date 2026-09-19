import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqxw4t2sy.css';
import '../../css/i/iq2exjbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer hqxw4t2sy"/><path class="duoicon-primary-layer iq2exjbrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:briefcase"} {...others} />);
}

export default Component;
