import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dx5_a1gah.css';
import '../../css/m/m8cv62bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dx5_a1gah"/><path class="m8cv62bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coin-off"} {...others} />);
}

export default Component;
