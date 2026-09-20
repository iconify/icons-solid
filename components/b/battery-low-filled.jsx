import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7ce1ju2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w7ce1ju2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:battery-low-filled"} {...others} />);
}

export default Component;
