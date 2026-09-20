import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6dg4qbek.css';
import '../../css/h/hfnpruahq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c6dg4qbek"/><path class="hfnpruahq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:amazon-s3-light"} {...others} />);
}

export default Component;
