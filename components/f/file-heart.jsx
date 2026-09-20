import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq4w3cc3j.css';
import '../../css/b/bf844qbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jq4w3cc3j"/><path class="bf844qbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-heart"} {...others} />);
}

export default Component;
