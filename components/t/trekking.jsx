import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ofuzibb5a.css';
import '../../css/c/ci1-9y8re.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ofuzibb5a"/><path class="ci1-9y8re"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:trekking"} {...others} />);
}

export default Component;
