import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibh0pxv3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ibh0pxv3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:badge-solid"} {...others} />);
}

export default Component;
