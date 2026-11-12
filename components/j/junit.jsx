import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icxtj8y_t.css';
import '../../css/m/m8tseed-k.css';
import '../../css/g/g5loyxbvi.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="icxtj8y_t"/><path class="m8tseed-k"/><path class="g5loyxbvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:junit"} {...others} />);
}

export default Component;
