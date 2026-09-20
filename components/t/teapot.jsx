import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/me4z_8btf.css';
import '../../css/w/ww-154yyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="me4z_8btf"/><path class="ww-154yyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:teapot"} {...others} />);
}

export default Component;
