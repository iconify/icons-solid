import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbw5dkbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nbw5dkbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:bluetooth-bold"} {...others} />);
}

export default Component;
