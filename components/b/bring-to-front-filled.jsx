import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox6ac-bhz.css';
import '../../css/p/ps-9ixb8e.css';
import '../../css/o/oo9pv9z9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox6ac-bhz"/><path class="ps-9ixb8e"/><path class="oo9pv9z9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bring-to-front-filled"} {...others} />);
}

export default Component;
