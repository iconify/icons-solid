import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff_zigbzi.css';
import '../../css/r/r46vxebie.css';
import '../../css/e/et996hggo.css';
import '../../css/o/os8b0uf2k.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ff_zigbzi"/><circle class="r46vxebie"/><path class="et996hggo"/><path class="os8b0uf2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:pytorch-wordmark"} {...others} />);
}

export default Component;
