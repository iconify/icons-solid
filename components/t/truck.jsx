import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ifnhg9bid.css';
import '../../css/b/bf9hqaclw.css';
import '../../css/e/ec_xsy4gs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ifnhg9bid"/><circle class="bf9hqaclw"/><circle class="ec_xsy4gs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:truck"} {...others} />);
}

export default Component;
