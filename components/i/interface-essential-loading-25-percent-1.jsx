import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-v9j-zlm.css';
import '../../css/t/tsvt3bbpr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e-v9j-zlm"/><path class="tsvt3bbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-loading-25-percent-1"} {...others} />);
}

export default Component;
