import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0c9q5kao.css';
import '../../css/y/y4llj8bzo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t0c9q5kao"/><path class="y4llj8bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:snowshare"} {...others} />);
}

export default Component;
