import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frspmqwww.css';

const viewBox = {"width":8,"height":16};
const content = `<path class="frspmqwww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:primitive-dot"} {...others} />);
}

export default Component;
