import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6r7z_bwt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i6r7z_bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:bootstrap"} {...others} />);
}

export default Component;
