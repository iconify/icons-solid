import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-jjq0cjo.css';
import '../../css/v/v1usrjhaw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t-jjq0cjo"/><path class="v1usrjhaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:agam-space"} {...others} />);
}

export default Component;
