import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b03t9pb-w.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b03t9pb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:lock-open"} {...others} />);
}

export default Component;
