import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc21hcbgh.css';
import '../../css/o/o5x0bvbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hc21hcbgh"/><path clip-rule="evenodd" class="o5x0bvbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:browser-light"} {...others} />);
}

export default Component;
