import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_66s4b0b.css';
import '../../css/d/dwwqc9d1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b_66s4b0b"/><path class="dwwqc9d1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:band-aid"} {...others} />);
}

export default Component;
