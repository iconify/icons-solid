import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/naztyfwja.css';
import '../../css/z/zo4h-60oq.css';
import '../../css/t/t-u0yzblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="naztyfwja"/><circle class="zo4h-60oq"/><circle class="t-u0yzblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-cog"} {...others} />);
}

export default Component;
