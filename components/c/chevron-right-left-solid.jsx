import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svl07cy6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svl07cy6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:chevron-right-left-solid"} {...others} />);
}

export default Component;
