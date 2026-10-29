import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rxipy30ut.css';
import '../../css/t/thwmpnbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rxipy30ut"/><path class="thwmpnbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:image-minus"} {...others} />);
}

export default Component;
