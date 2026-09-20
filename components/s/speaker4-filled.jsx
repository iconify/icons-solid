import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvfmq8e6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nvfmq8e6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:speaker4-filled"} {...others} />);
}

export default Component;
