import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/niele7ihp.css';
import '../../css/o/o2ijbbb7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="niele7ihp"/><path class="o2ijbbb7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-stadium"} {...others} />);
}

export default Component;
