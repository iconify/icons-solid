import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gkyhxdcsi.css';
import '../../css/y/y_0euxb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gkyhxdcsi"/><path class="y_0euxb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cloud-computing"} {...others} />);
}

export default Component;
