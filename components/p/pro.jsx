import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo94e-b0r.css';
import '../../css/e/enjmbiu9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fo94e-b0r"/><path class="enjmbiu9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:pro"} {...others} />);
}

export default Component;
