import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr_by2_hg.css';
import '../../css/s/stthulblw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr_by2_hg"/><path class="stthulblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-search-alt"} {...others} />);
}

export default Component;
