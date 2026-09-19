import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goohnvfrd.css';
import '../../css/z/z8ck8jbnx.css';
import '../../css/e/eo7yq6b7f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="goohnvfrd"/><path class="z8ck8jbnx"/><path class="eo7yq6b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:document"} {...others} />);
}

export default Component;
