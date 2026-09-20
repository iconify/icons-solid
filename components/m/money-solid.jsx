import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu5lx12xc.css';
import '../../css/v/v3045wb7h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gu5lx12xc"/><path clip-rule="evenodd" class="v3045wb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:money-solid"} {...others} />);
}

export default Component;
