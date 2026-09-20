import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7lp9dbvq.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-3};
const content = `<path class="u7lp9dbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:volume-mute"} {...others} />);
}

export default Component;
