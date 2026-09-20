import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2vb22kcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u2vb22kcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:user-check-solid"} {...others} />);
}

export default Component;
