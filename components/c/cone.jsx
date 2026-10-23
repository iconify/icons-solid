import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8ymjrl3o.css';
import '../../css/a/a7ig5u7yq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o8ymjrl3o"/><path class="a7ig5u7yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cone"} {...others} />);
}

export default Component;
