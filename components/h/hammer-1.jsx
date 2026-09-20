import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2p1d0b1v.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="a2p1d0b1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:hammer-1"} {...others} />);
}

export default Component;
