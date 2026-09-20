import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s54wg-5dm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s54wg-5dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:profile-2user"} {...others} />);
}

export default Component;
