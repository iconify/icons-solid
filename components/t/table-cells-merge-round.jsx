import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5g9r1bvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5g9r1bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-cells-merge-round"} {...others} />);
}

export default Component;
