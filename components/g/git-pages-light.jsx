import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzzc_c6ad.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nzzc_c6ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:git-pages-light"} {...others} />);
}

export default Component;
