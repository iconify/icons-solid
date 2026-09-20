import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nflt8sfxw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nflt8sfxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:triangles-left-right"} {...others} />);
}

export default Component;
