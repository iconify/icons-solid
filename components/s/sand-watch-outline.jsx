import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9s8gdcsr.css';
import '../../css/g/gs-juzbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9s8gdcsr"/><path clip-rule="evenodd" class="gs-juzbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:sand-watch-outline"} {...others} />);
}

export default Component;
