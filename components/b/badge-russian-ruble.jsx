import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwek42bav.css';
import '../../css/v/vjuvz2bvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gwek42bav"/><path class="vjuvz2bvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:badge-russian-ruble"} {...others} />);
}

export default Component;
