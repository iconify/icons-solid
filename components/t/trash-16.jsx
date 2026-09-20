import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp27ucbkg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mp27ucbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:trash-16"} {...others} />);
}

export default Component;
