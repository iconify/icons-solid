import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq795xbch.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fq795xbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:archive"} {...others} />);
}

export default Component;
