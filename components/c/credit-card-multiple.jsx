import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hff65g63h.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="hff65g63h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:credit-card-multiple"} {...others} />);
}

export default Component;
