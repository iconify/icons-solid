import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aaxn-e78x.css';
import '../../css/n/n9ukfnb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aaxn-e78x"/><path class="n9ukfnb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:sandwich"} {...others} />);
}

export default Component;
