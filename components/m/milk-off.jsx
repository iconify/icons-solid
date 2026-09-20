import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yndbwdb_n.css';
import '../../css/k/k9ecbh3kj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yndbwdb_n"/><path class="k9ecbh3kj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:milk-off"} {...others} />);
}

export default Component;
