import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd_4pkbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jd_4pkbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:angle-left"} {...others} />);
}

export default Component;
