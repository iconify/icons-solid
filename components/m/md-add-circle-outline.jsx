import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxds-kb_t.css';
import '../../css/m/moox_lvwe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rxds-kb_t"/><path class="moox_lvwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-add-circle-outline"} {...others} />);
}

export default Component;
