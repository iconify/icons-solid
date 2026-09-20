import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z12mh10-b.css';
import '../../css/a/absmdjrwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z12mh10-b"/><path class="absmdjrwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-9"} {...others} />);
}

export default Component;
