import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9kjshfdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9kjshfdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:box-dashed"} {...others} />);
}

export default Component;
