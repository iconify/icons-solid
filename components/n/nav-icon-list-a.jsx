import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s189b_bca.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="s189b_bca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:nav-icon-list-a"} {...others} />);
}

export default Component;
