import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbza77bui.css';
import '../../css/t/tu6holb5a.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="kbza77bui"/><path class="tu6holb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-gear"} {...others} />);
}

export default Component;
