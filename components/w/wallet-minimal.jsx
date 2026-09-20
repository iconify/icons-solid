import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbq_-nbar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbq_-nbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:wallet-minimal"} {...others} />);
}

export default Component;
