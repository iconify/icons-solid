import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ouv-3on5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ouv-3on5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:phone-x-filled"} {...others} />);
}

export default Component;
