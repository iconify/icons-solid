import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpl0q1bzo.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="xpl0q1bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:volume-off"} {...others} />);
}

export default Component;
