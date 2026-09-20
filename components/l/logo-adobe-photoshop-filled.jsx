import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6qf9oyxh.css';
import '../../css/i/i-nkzdl-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6qf9oyxh"/><path class="i-nkzdl-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-adobe-photoshop-filled"} {...others} />);
}

export default Component;
