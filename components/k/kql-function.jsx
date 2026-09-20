import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzp-t0tmy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bzp-t0tmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:kql-function"} {...others} />);
}

export default Component;
