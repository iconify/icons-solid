import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2ndvpb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2ndvpb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:palm-tree-solid"} {...others} />);
}

export default Component;
