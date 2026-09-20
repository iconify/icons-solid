import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us0-41abq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="us0-41abq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-shine-outline"} {...others} />);
}

export default Component;
