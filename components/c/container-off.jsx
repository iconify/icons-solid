import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao7ij_ccs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ao7ij_ccs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:container-off"} {...others} />);
}

export default Component;
