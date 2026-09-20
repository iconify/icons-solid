import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw9r7gbbd.css';
import '../../css/u/ull6c1baj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xw9r7gbbd"/><path class="ull6c1baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-blocked-filled"} {...others} />);
}

export default Component;
