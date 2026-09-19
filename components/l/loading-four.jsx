import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-gvyg65x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g-gvyg65x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:loading-four"} {...others} />);
}

export default Component;
