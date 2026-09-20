import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xr_5xg10s.css';
import '../../css/f/ftlh4p7ox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xr_5xg10s"/><path class="ftlh4p7ox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:radar"} {...others} />);
}

export default Component;
