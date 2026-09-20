import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7uwmjy0t.css';
import '../../css/m/mg-6g4b_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7uwmjy0t"/><path class="mg-6g4b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:inbox-star-fill"} {...others} />);
}

export default Component;
