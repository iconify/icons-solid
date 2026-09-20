import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id-0tgb0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="id-0tgb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:user-notloggedin-active"} {...others} />);
}

export default Component;
