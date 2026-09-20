import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocj-akbzq.css';
import '../../css/u/ug5oqdb4t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ocj-akbzq"/><path clip-rule="evenodd" class="ug5oqdb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:tag-solid"} {...others} />);
}

export default Component;
