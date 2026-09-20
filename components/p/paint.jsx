import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pr5vhccbw.css';
import '../../css/s/sl7gii-2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pr5vhccbw"/><path class="sl7gii-2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:paint"} {...others} />);
}

export default Component;
