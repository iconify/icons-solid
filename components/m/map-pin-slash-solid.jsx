import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie3zn7bfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ie3zn7bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:map-pin-slash-solid"} {...others} />);
}

export default Component;
