import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blalr_7lp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="blalr_7lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:square-minus-solid"} {...others} />);
}

export default Component;
