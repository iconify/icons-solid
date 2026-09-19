import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7w0g9z2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b7w0g9z2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:minizinc"} {...others} />);
}

export default Component;
