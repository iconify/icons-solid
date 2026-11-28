import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8z-_ftin.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e8z-_ftin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:cherry-heart"} {...others} />);
}

export default Component;
