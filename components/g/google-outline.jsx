import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adh6zfbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="adh6zfbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:google-outline"} {...others} />);
}

export default Component;
