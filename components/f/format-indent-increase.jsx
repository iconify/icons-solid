import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwl-77ffc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwl-77ffc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:format-indent-increase"} {...others} />);
}

export default Component;
