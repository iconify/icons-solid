import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fro4r_rjb.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fro4r_rjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:file-modified-solid"} {...others} />);
}

export default Component;
