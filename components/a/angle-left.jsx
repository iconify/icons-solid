import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg6nrp1ic.css';

const viewBox = {"width":608,"height":1280};
const content = `<path class="rg6nrp1ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:angle-left"} {...others} />);
}

export default Component;
