import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt922oa_d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bt922oa_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:google"} {...others} />);
}

export default Component;
