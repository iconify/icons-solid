import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v407nob8w.css';
import '../../css/s/soa8t5ume.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v407nob8w"/><path class="soa8t5ume"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bat"} {...others} />);
}

export default Component;
