import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p3i6y6fwn.css';
import '../../css/b/bisr3edpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p3i6y6fwn"/><path class="bisr3edpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-heart"} {...others} />);
}

export default Component;
