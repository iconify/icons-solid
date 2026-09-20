import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gznn9sbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gznn9sbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sport-shoe"} {...others} />);
}

export default Component;
