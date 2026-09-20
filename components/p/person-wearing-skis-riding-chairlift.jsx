import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm1n_3d2g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lm1n_3d2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-wearing-skis-riding-chairlift"} {...others} />);
}

export default Component;
