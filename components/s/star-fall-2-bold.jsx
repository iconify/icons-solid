import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvrwd2b_b.css';
import '../../css/f/f-cbj-b0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvrwd2b_b"/><path class="f-cbj-b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-2-bold"} {...others} />);
}

export default Component;
