import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrnuwrb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrnuwrb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:forward-filled"} {...others} />);
}

export default Component;
