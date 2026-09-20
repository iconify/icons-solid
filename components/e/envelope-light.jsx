import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of2kmjqzd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="of2kmjqzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:envelope-light"} {...others} />);
}

export default Component;
