import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aic02ybsv.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="aic02ybsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:carbattery"} {...others} />);
}

export default Component;
