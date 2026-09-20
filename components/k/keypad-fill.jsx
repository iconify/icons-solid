import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni68l2f_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ni68l2f_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:keypad-fill"} {...others} />);
}

export default Component;
