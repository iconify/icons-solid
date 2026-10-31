import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/g/gr3cuob9h.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="gr3cuob9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:scotland"} {...others} />);
}

export default Component;
