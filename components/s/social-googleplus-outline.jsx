import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4rwk7b8u.css';
import '../../css/r/r8fapn48o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m4rwk7b8u"/><path class="r8fapn48o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-googleplus-outline"} {...others} />);
}

export default Component;
