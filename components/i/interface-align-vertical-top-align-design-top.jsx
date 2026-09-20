import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z5ias_4yk.css';
import '../../css/g/gdatfssdj.css';
import '../../css/t/tzfvapu6d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="z5ias_4yk"/><rect transform="rotate(90 10.5 6.25)" class="gdatfssdj"/><rect transform="rotate(90 3.5 8.25)" class="tzfvapu6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-align-vertical-top-align-design-top"} {...others} />);
}

export default Component;
