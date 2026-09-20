import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im5fqoxyd.css';

const viewBox = {"width":553.4,"height":78.9};
const content = `<path class="im5fqoxyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:marqeta-light"} {...others} />);
}

export default Component;
