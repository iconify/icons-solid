import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oho2e76vt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oho2e76vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:light-bulb"} {...others} />);
}

export default Component;
