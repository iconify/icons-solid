import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgxaq2bcw.css';
import '../../css/w/wa_kvdvqj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vgxaq2bcw"/><path clip-rule="evenodd" class="wa_kvdvqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:token-search-type"} {...others} />);
}

export default Component;
