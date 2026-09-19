import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpy7t5tbp.css';
import '../../css/j/j2y13v5ma.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fpy7t5tbp"/><path class="j2y13v5ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:share-fill-16"} {...others} />);
}

export default Component;
