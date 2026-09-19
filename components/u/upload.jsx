import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kilp2bv1g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="kilp2bv1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:upload"} {...others} />);
}

export default Component;
