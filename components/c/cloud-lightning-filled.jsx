import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_mguhhan.css';
import '../../css/z/z5f1labnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f_mguhhan"/><path class="z5f1labnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-lightning-filled"} {...others} />);
}

export default Component;
