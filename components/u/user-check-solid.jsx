import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re0-0ibvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="re0-0ibvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:user-check-solid"} {...others} />);
}

export default Component;
