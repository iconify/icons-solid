import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke9bzzbux.css';

const viewBox = {"width":870,"height":1000};
const content = `<path class="ke9bzzbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:emo-grin"} {...others} />);
}

export default Component;
