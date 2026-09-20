import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcg1skb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcg1skb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:box-archive-filled"} {...others} />);
}

export default Component;
