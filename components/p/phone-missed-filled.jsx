import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpyifib8k.css';
import '../../css/h/hj55octgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpyifib8k"/><path class="hj55octgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:phone-missed-filled"} {...others} />);
}

export default Component;
