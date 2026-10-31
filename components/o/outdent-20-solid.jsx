import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_hh5zb6g.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="p_hh5zb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:outdent-20-solid"} {...others} />);
}

export default Component;
