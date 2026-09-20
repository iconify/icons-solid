import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6tjm_bie.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="u6tjm_bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:face-id-solid"} {...others} />);
}

export default Component;
