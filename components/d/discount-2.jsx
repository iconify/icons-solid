import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ueef18k6a.css';
import '../../css/u/uvw242b-s.css';
import '../../css/a/a3dm0rbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ueef18k6a"/><path class="uvw242b-s"/><path class="a3dm0rbgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:discount-2"} {...others} />);
}

export default Component;
