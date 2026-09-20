import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fa_2v2l-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fa_2v2l-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:times-light"} {...others} />);
}

export default Component;
