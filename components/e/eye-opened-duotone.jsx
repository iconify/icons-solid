import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7h45sbre.css';
import '../../css/s/s1zok783v.css';
import '../../css/a/a53wavbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y7h45sbre"/><path class="s1zok783v"/><path class="a53wavbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:eye-opened-duotone"} {...others} />);
}

export default Component;
