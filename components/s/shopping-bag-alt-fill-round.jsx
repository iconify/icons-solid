import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcu2-ibcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcu2-ibcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-bag-alt-fill-round"} {...others} />);
}

export default Component;
