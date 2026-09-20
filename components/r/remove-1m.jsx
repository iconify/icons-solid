import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2brmfbab.css';
import '../../css/a/a3jz1tb7x.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="b2brmfbab"/><path class="a3jz1tb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:remove-1m"} {...others} />);
}

export default Component;
