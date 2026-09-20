import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz32jjbma.css';
import '../../css/m/mg-i62fru.css';
import '../../css/r/rzyax-b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bz32jjbma"/><path class="mg-i62fru"/><path class="rzyax-b9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:web-section"} {...others} />);
}

export default Component;
