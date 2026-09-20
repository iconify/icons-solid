import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1b7qgi_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1b7qgi_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:heart-solid"} {...others} />);
}

export default Component;
