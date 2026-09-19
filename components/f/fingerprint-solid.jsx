import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okwql1bgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okwql1bgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:fingerprint-solid"} {...others} />);
}

export default Component;
