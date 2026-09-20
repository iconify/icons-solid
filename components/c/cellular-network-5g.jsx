import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq1hn912b.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="uq1hn912b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cellular-network-5g"} {...others} />);
}

export default Component;
