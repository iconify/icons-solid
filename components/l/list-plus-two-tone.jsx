import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ryvt14b8p.css';
import '../../css/o/o7okk_bgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ryvt14b8p"/><path class="o7okk_bgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-plus-two-tone"} {...others} />);
}

export default Component;
