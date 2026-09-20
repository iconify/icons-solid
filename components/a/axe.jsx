import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rg8u0-b0d.css';
import '../../css/a/ampzx7bne.css';
import '../../css/x/x3xi03bfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rg8u0-b0d"/><path class="ampzx7bne"/><path class="x3xi03bfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:axe"} {...others} />);
}

export default Component;
