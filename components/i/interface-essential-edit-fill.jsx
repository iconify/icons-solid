import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auzyjbssd.css';
import '../../css/u/uk0alub0v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="auzyjbssd"/><path class="uk0alub0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-edit-fill"} {...others} />);
}

export default Component;
