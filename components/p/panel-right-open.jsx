import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4fo2ikrv.css';
import '../../css/y/yi3jaj7xh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u4fo2ikrv"/><path class="yi3jaj7xh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:panel-right-open"} {...others} />);
}

export default Component;
