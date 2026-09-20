import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rde87_mjj.css';
import '../../css/g/g9uw349nr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rde87_mjj"/><path class="g9uw349nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:link-24"} {...others} />);
}

export default Component;
