import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utj8jebkl.css';
import '../../css/t/ty4gwj7hq.css';
import '../../css/o/o9747sblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="utj8jebkl"/><path class="ty4gwj7hq"/><path class="o9747sblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:radar"} {...others} />);
}

export default Component;
