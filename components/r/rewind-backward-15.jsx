import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o9ikg-1ps.css';
import '../../css/p/px8tuobck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o9ikg-1ps"/><path class="px8tuobck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rewind-backward-15"} {...others} />);
}

export default Component;
