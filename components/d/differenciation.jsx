import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uto8vj0dn.css';

const viewBox = {"width":20,"height":14};
const content = `<path class="uto8vj0dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:differenciation"} {...others} />);
}

export default Component;
