import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxe6m81df.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxe6m81df"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:flip-horizontal"} {...others} />);
}

export default Component;
