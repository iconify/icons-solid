import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo_9irb0d.css';
import '../../css/l/l6wodwbos.css';
import '../../css/s/siajtsbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bo_9irb0d"/><path class="l6wodwbos"/><path class="siajtsbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wrench"} {...others} />);
}

export default Component;
