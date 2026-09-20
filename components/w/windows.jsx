import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txtnrsm5l.css';
import '../../css/v/vgxjb1-7u.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="txtnrsm5l"/><path class="vgxjb1-7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:windows"} {...others} />);
}

export default Component;
