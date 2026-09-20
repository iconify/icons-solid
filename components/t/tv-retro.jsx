import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p9sas3rig.css';
import '../../css/a/agpc7w7mo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="p9sas3rig"/><path class="agpc7w7mo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:tv-retro"} {...others} />);
}

export default Component;
