import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abwve-4qr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="abwve-4qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trilium-deprecated-light"} {...others} />);
}

export default Component;
