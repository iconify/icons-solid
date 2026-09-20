import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhg7x8ycq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lhg7x8ycq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:web-grid-alt"} {...others} />);
}

export default Component;
