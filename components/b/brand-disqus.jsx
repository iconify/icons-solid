import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uss-f228g.css';
import '../../css/z/z63nz4kvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uss-f228g"/><path class="z63nz4kvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-disqus"} {...others} />);
}

export default Component;
