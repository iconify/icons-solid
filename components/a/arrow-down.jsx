import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbw7_8o6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbw7_8o6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:arrow-down"} {...others} />);
}

export default Component;
