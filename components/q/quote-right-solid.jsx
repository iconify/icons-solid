import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnz6y9byx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wnz6y9byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:quote-right-solid"} {...others} />);
}

export default Component;
