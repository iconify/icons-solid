import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etwiq-3gv.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="etwiq-3gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:caret-up"} {...others} />);
}

export default Component;
