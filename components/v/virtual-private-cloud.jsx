import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8a0o-eya.css';
import '../../css/b/bde2b1vcx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y8a0o-eya"/><path class="bde2b1vcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:virtual-private-cloud"} {...others} />);
}

export default Component;
