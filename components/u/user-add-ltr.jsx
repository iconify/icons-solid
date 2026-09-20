import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vftgk3iha.css';
import '../../css/c/chmm2dpgi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vftgk3iha"/><circle class="chmm2dpgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-add-ltr"} {...others} />);
}

export default Component;
