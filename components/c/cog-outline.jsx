import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uow_jjbnc.css';
import '../../css/g/guewfbcxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uow_jjbnc"/><path class="guewfbcxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:cog-outline"} {...others} />);
}

export default Component;
