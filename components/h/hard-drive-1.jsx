import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxc8ivijy.css';
import '../../css/b/b7ir75bum.css';
import '../../css/m/ml68l7rmo.css';
import '../../css/m/m3c-a4u-t.css';
import '../../css/a/az0061ldj.css';
import '../../css/p/pogz1z9nl.css';
import '../../css/t/txf-vk9-a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nxc8ivijy"/><path class="b7ir75bum"/><path class="ml68l7rmo"/><path class="m3c-a4u-t"/><path class="az0061ldj"/><path class="pogz1z9nl"/><path class="txf-vk9-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:hard-drive-1"} {...others} />);
}

export default Component;
