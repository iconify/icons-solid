import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1pl9mbyq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q1pl9mbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:train-front-fill"} {...others} />);
}

export default Component;
