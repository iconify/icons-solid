import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtm7eswgo.css';

const viewBox = {"width":1664,"height":1600};
const content = `<path class="xtm7eswgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:umbrella"} {...others} />);
}

export default Component;
