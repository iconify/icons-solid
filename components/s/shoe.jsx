import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n2m9ogbfe.css';
import '../../css/j/jx73qqbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n2m9ogbfe"/><path class="jx73qqbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shoe"} {...others} />);
}

export default Component;
