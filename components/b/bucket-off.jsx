import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q40o-6b1z.css';
import '../../css/b/bs972-btf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q40o-6b1z"/><path class="bs972-btf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bucket-off"} {...others} />);
}

export default Component;
