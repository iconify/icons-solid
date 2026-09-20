import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3qdx_-ml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3qdx_-ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:make-up-lipstick-1-bold"} {...others} />);
}

export default Component;
