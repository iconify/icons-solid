import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b5w3hk87x.css';
import '../../css/g/gd6wjjbrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b5w3hk87x"/><path class="gd6wjjbrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:battery-low-duocolor-round"} {...others} />);
}

export default Component;
