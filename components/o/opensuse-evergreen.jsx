import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a35gpnboz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a35gpnboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opensuse-evergreen"} {...others} />);
}

export default Component;
