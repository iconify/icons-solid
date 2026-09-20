import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwzn8zblb.css';
import '../../css/o/o_4maxboe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dwzn8zblb"/><path class="o_4maxboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:diamond"} {...others} />);
}

export default Component;
