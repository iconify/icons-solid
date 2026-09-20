import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ljfo4vnxc.css';
import '../../css/e/e2w2-bc9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ljfo4vnxc"/><path class="e2w2-bc9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-evernote"} {...others} />);
}

export default Component;
