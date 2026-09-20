import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md2z_6kln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="md2z_6kln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cooperate-filled"} {...others} />);
}

export default Component;
