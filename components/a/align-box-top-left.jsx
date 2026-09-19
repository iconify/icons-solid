import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl0hz87mp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fl0hz87mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:align-box-top-left"} {...others} />);
}

export default Component;
