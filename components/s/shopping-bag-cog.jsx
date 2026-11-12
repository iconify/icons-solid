import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hija0e12r.css';
import '../../css/c/ce3pv2bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hija0e12r"/><path class="ce3pv2bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-cog"} {...others} />);
}

export default Component;
