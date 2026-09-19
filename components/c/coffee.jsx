import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezlrxrblv.css';

const viewBox = {"width":1856,"height":1408};
const content = `<path class="ezlrxrblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:coffee"} {...others} />);
}

export default Component;
