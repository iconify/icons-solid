import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5d9s8bzd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j5d9s8bzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:work-item-new"} {...others} />);
}

export default Component;
