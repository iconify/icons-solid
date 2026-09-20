import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7i7tqbhm.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="t7i7tqbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:fishing-pier"} {...others} />);
}

export default Component;
