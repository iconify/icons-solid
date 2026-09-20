import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc9v1m4ih.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nc9v1m4ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:shopping-bag-with-gas-flame"} {...others} />);
}

export default Component;
