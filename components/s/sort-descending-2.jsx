import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-4u-qasj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-4u-qasj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sort-descending-2"} {...others} />);
}

export default Component;
