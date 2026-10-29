import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhwwc2blb.css';
import '../../css/b/bef-jeb5r.css';
import '../../css/n/nz-mu3bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fhwwc2blb wm-a"/><path class="bef-jeb5r wm-k"/><path class="nz-mu3bbv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:balloon"} {...others} />);
}

export default Component;
