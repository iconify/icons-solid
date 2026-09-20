import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/z/z8r2z9bly.css';
import '../../css/e/eekgs0b0l.css';
import '../../css/m/mof3eqe_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><rect transform="rotate(90 18 15)" class="z8r2z9bly"/><rect transform="rotate(-90 6 8)" class="eekgs0b0l"/><path class="mof3eqe_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:nesting-duotone"} {...others} />);
}

export default Component;
