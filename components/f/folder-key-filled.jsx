import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw4bdbblf.css';
import '../../css/i/i2s-32vgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bw4bdbblf"/><path class="i2s-32vgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-key-filled"} {...others} />);
}

export default Component;
