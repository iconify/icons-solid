import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vat5sxy9q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vat5sxy9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:sourceforge"} {...others} />);
}

export default Component;
