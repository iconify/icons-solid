import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m85i73_cc.css';
import '../../css/c/cj59wwj5r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m85i73_cc"/><path class="cj59wwj5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:buggregator-dark"} {...others} />);
}

export default Component;
