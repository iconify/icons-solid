import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itm5al3co.css';
import '../../css/t/tytsexmko.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="itm5al3co"/><path clip-rule="evenodd" class="tytsexmko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-number-9-fill"} {...others} />);
}

export default Component;
