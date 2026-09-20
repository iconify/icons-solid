import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fquq4wb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fquq4wb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-iwiki-filled"} {...others} />);
}

export default Component;
