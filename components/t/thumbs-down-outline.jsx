import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfv8uccdl.css';
import '../../css/g/gr-hcbcva.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sfv8uccdl"/><path class="gr-hcbcva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:thumbs-down-outline"} {...others} />);
}

export default Component;
