import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjna77bsx.css';
import '../../css/p/p48132bjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjna77bsx"/><path clip-rule="evenodd" class="p48132bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shrimp-filled"} {...others} />);
}

export default Component;
