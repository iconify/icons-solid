import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eisknabqx.css';
import '../../css/h/hawpsccml.css';
import '../../css/x/xg9h40s8h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eisknabqx"/><path class="hawpsccml"/><path class="xg9h40s8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linux-update-dashboard"} {...others} />);
}

export default Component;
