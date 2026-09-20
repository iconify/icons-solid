import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd1pfnb0e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vd1pfnb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:container-image"} {...others} />);
}

export default Component;
