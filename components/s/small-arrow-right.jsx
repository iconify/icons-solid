import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_07bhb6l.css';

const viewBox = {"width":210,"height":700};
const content = `<path class="o_07bhb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:small-arrow-right"} {...others} />);
}

export default Component;
