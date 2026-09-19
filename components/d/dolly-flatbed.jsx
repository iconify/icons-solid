import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_78iu5-n.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="k_78iu5-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:dolly-flatbed"} {...others} />);
}

export default Component;
