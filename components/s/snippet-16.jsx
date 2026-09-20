import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktu5yu9_t.css';
import '../../css/i/iwm0m9oaw.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ktu5yu9_t"/><path class="iwm0m9oaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:snippet-16"} {...others} />);
}

export default Component;
