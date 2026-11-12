import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry8edhbmf.css';
import '../../css/p/ps1262b5v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ry8edhbmf"/><path class="ps1262b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oak-identity-light"} {...others} />);
}

export default Component;
