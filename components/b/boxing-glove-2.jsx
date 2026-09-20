import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlnerbb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xlnerbb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:boxing-glove-2"} {...others} />);
}

export default Component;
