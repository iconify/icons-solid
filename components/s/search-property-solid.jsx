import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb-ftubup.css';
import '../../css/e/e3bbx6bvh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kb-ftubup"/><path clip-rule="evenodd" class="e3bbx6bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:search-property-solid"} {...others} />);
}

export default Component;
