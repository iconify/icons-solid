import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efl8wly-r.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="efl8wly-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:postscript"} {...others} />);
}

export default Component;
