import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/abfeulbnv.css';
import '../../css/r/rv8v62twe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="abfeulbnv"/><path clip-rule="evenodd" class="rv8v62twe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-basket-duotone"} {...others} />);
}

export default Component;
