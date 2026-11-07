import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz4ipxy5n.css';
import '../../css/h/hu27cibfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kz4ipxy5n"/><path class="hu27cibfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-bold"} {...others} />);
}

export default Component;
