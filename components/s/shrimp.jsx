import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pazdh38fl.css';
import '../../css/e/eqlxv263a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pazdh38fl"/><path class="eqlxv263a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shrimp"} {...others} />);
}

export default Component;
