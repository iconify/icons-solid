import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu0s4ebai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pu0s4ebai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:spotify-solid"} {...others} />);
}

export default Component;
