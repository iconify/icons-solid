import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjy7e6bar.css';
import '../../css/u/uurqwjb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bjy7e6bar"/><path class="uurqwjb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clock-arrow-down"} {...others} />);
}

export default Component;
