import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsr1sacqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hsr1sacqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:caravan-heart"} {...others} />);
}

export default Component;
