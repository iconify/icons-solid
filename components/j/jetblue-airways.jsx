import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grkthnbuz.css';
import '../../css/z/z46kzigug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="grkthnbuz"/><path class="z46kzigug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jetblue-airways"} {...others} />);
}

export default Component;
