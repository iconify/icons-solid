import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-8zq7ywg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-8zq7ywg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dots-diagonal"} {...others} />);
}

export default Component;
