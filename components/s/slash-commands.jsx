import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evohz4o-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evohz4o-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:slash-commands"} {...others} />);
}

export default Component;
