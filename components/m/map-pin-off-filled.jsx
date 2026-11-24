import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da33ryhuh.css';
import '../../css/g/gnqvxofvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="da33ryhuh"/><path class="gnqvxofvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:map-pin-off-filled"} {...others} />);
}

export default Component;
