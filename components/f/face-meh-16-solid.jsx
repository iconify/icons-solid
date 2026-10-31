import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw-hmtx_s.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rw-hmtx_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:face-meh-16-solid"} {...others} />);
}

export default Component;
