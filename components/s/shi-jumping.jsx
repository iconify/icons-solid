import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p0h6i3b5o.css';
import '../../css/v/v49m2bq4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p0h6i3b5o"/><path class="v49m2bq4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shi-jumping"} {...others} />);
}

export default Component;
