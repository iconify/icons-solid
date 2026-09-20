import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omnc04z9c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="omnc04z9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:function-block-library"} {...others} />);
}

export default Component;
