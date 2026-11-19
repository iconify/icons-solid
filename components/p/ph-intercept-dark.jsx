import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgcdo-zfb.css';
import '../../css/u/ufos4gbmw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cgcdo-zfb"/><path class="ufos4gbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ph-intercept-dark"} {...others} />);
}

export default Component;
