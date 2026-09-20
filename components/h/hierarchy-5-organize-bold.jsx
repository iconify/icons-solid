import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx8ltgbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dx8ltgbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hierarchy-5-organize-bold"} {...others} />);
}

export default Component;
