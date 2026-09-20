import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llyo8-6yr.css';
import '../../css/y/yc9mclg0j.css';
import '../../css/s/s6dkgxb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="llyo8-6yr"/><path class="yc9mclg0j"/><path class="s6dkgxb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:git-pull-request-create-arrow"} {...others} />);
}

export default Component;
