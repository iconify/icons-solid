import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l3q4wd40i.css';
import '../../css/z/zjpkobcnb.css';
import '../../css/t/tw6lfcb_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l3q4wd40i"/><path class="zjpkobcnb"/><path class="tw6lfcb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:job-profile-search"} {...others} />);
}

export default Component;
