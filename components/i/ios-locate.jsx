import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwlq_8b3i.css';
import '../../css/r/roy4gvbpv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uwlq_8b3i"/><path class="roy4gvbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-locate"} {...others} />);
}

export default Component;
