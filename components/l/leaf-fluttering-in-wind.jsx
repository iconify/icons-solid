import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj8t-vbbi.css';
import '../../css/b/b_slk7bwp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tj8t-vbbi"/><path class="b_slk7bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leaf-fluttering-in-wind"} {...others} />);
}

export default Component;
