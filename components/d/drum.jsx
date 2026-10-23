import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5snfub5j.css';
import '../../css/t/t2u0w80it.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p5snfub5j"/><path class="t2u0w80it"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:drum"} {...others} />);
}

export default Component;
