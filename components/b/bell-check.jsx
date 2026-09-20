import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qp53u5ikk.css';
import '../../css/f/f6nx0f01y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qp53u5ikk"/><path class="f6nx0f01y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:bell-check"} {...others} />);
}

export default Component;
