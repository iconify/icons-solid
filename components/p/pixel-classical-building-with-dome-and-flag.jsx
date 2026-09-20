import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nns_4vajp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nns_4vajp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-classical-building-with-dome-and-flag"} {...others} />);
}

export default Component;
