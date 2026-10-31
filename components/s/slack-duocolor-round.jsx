import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fn7f-4bhd.css';
import '../../css/p/pn6z_7sis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fn7f-4bhd"/><path class="pn6z_7sis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slack-duocolor-round"} {...others} />);
}

export default Component;
