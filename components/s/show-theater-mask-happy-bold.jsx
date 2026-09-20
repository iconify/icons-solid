import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1q57iy2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1q57iy2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:show-theater-mask-happy-bold"} {...others} />);
}

export default Component;
