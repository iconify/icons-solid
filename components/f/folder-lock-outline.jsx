import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc0el9bce.css';
import '../../css/r/r8s95ubha.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lc0el9bce"/><path class="r8s95ubha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:folder-lock-outline"} {...others} />);
}

export default Component;
