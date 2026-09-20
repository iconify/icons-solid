import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-nov7bvx.css';
import '../../css/y/ygf4ec0qt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b-nov7bvx"/><path class="ygf4ec0qt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-comedy-central"} {...others} />);
}

export default Component;
