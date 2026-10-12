import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbvxq0xxv.css';
import '../../css/w/w8ad1sbib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nbvxq0xxv"/><path class="w8ad1sbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bell-plus-filled"} {...others} />);
}

export default Component;
