import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nap0jub9n.css';
import '../../css/d/dfhvb_bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nap0jub9n"/><path class="dfhvb_bjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-check"} {...others} />);
}

export default Component;
