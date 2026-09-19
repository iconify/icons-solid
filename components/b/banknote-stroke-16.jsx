import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw7r68gtj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iw7r68gtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:banknote-stroke-16"} {...others} />);
}

export default Component;
