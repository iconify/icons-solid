import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpdyx2oqs.css';
import '../../css/v/v466cfl0k.css';
import '../../css/x/xutg7tbyr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xpdyx2oqs"/><path class="v466cfl0k"/><path class="xutg7tbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-behance"} {...others} />);
}

export default Component;
