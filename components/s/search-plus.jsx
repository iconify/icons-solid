import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uowjoqehi.css';
import '../../css/s/se-m8-fzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uowjoqehi"/><path class="se-m8-fzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:search-plus"} {...others} />);
}

export default Component;
