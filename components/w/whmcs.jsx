import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ratr-0b0y.css';

const viewBox = {"width":974,"height":1024};
const content = `<path class="ratr-0b0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:whmcs"} {...others} />);
}

export default Component;
