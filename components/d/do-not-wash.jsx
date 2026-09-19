import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywk2o2cwx.css';

const viewBox = {"width":528,"height":496};
const content = `<path class="ywk2o2cwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:do-not-wash"} {...others} />);
}

export default Component;
