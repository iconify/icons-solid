import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yce_ecd9i.css';
import '../../css/d/dasmli_2u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yce_ecd9i"/><circle class="dasmli_2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:tag-ltr"} {...others} />);
}

export default Component;
