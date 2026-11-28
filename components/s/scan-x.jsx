import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo3lo3bwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lo3lo3bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:scan-x"} {...others} />);
}

export default Component;
