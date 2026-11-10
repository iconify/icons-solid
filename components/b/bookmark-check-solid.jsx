import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqa7h_o0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nqa7h_o0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:bookmark-check-solid"} {...others} />);
}

export default Component;
