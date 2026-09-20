import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/polv-0les.css';
import '../../css/f/fsw0aeb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="polv-0les"/><path class="fsw0aeb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:last-updates-solid"} {...others} />);
}

export default Component;
