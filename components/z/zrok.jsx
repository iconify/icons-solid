import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/boq6ejbul.css';
import '../../css/z/zlg69lb0a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="boq6ejbul"/><path class="zlg69lb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zrok"} {...others} />);
}

export default Component;
