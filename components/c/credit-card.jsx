import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roquk4b2w.css';
import '../../css/t/tba9ohb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="roquk4b2w"/><path class="tba9ohb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:credit-card"} {...others} />);
}

export default Component;
