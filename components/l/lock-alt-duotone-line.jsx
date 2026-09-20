import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/ratvl3qmf.css';
import '../../css/p/pmo9h3vcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ratvl3qmf"/><path class="pmo9h3vcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lock-alt-duotone-line"} {...others} />);
}

export default Component;
