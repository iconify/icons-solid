import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5-ql04qj.css';

const viewBox = {"width":1920,"height":1408};
const content = `<path class="h5-ql04qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:folder-open-o"} {...others} />);
}

export default Component;
