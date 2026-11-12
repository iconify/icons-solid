import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_7c1ju0s.css';
import '../../css/e/egq7xs-ks.css';
import '../../css/o/og_9js9al.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b_7c1ju0s"/><path class="egq7xs-ks"/><circle class="og_9js9al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:route-arrow-right"} {...others} />);
}

export default Component;
