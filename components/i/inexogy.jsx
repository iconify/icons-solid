import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahba87blp.css';
import '../../css/v/vmcevybnu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ahba87blp"/><path class="vmcevybnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:inexogy"} {...others} />);
}

export default Component;
