import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xn1-ixb9c.css';
import '../../css/m/m8exctsgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xn1-ixb9c"/><path class="m8exctsgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-cog"} {...others} />);
}

export default Component;
