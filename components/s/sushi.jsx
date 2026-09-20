import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6q8gwb1h.css';
import '../../css/k/k6dzamvnj.css';
import '../../css/u/uc0jhbc1o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l6q8gwb1h"/><path class="k6dzamvnj"/><path class="uc0jhbc1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sushi"} {...others} />);
}

export default Component;
