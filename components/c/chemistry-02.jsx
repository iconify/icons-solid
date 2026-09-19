import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/to1cgjbzi.css';
import '../../css/p/phhpl4biy.css';
import '../../css/y/y60xx1bkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="to1cgjbzi"/><path class="phhpl4biy"/><path class="y60xx1bkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chemistry-02"} {...others} />);
}

export default Component;
