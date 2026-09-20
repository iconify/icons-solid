import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c18t0a4dn.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="c18t0a4dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:pagebreak"} {...others} />);
}

export default Component;
