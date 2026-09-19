import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a07m1ch5g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a07m1ch5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:measuring-cup"} {...others} />);
}

export default Component;
