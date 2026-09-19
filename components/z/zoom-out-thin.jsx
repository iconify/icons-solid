import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_01jj14b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u_01jj14b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:zoom-out-thin"} {...others} />);
}

export default Component;
