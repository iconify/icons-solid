import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhwamkbws.css';
import '../../css/d/dtnoc5ijb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhwamkbws"/><path class="dtnoc5ijb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-arrow-up-duotone"} {...others} />);
}

export default Component;
