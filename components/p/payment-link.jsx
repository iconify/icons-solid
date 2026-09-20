import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od9ez2buj.css';
import '../../css/h/hstvx30-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="od9ez2buj"/><path class="hstvx30-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:payment-link"} {...others} />);
}

export default Component;
