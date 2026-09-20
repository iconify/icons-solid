import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-61yh8jp.css';
import '../../css/b/bscz2krbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p-61yh8jp"/><path class="bscz2krbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-python"} {...others} />);
}

export default Component;
