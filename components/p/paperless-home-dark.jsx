import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogoa_1oaa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ogoa_1oaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:paperless-home-dark"} {...others} />);
}

export default Component;
