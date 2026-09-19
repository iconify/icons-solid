import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s3fvc1qen.css';
import '../../css/k/k5darrm3j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="s3fvc1qen"/><path class="k5darrm3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:cnx"} {...others} />);
}

export default Component;
