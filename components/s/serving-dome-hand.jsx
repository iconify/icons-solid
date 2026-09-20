import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brpj7-nii.css';
import '../../css/g/g67t3oa_p.css';
import '../../css/p/p7xf1nb2p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="brpj7-nii"/><path class="g67t3oa_p"/><path class="p7xf1nb2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:serving-dome-hand"} {...others} />);
}

export default Component;
