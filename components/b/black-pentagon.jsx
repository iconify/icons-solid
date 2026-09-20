import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krg4aibpx.css';
import '../../css/z/z68qmysoe.css';
import '../../css/s/s3_8gac3t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="krg4aibpx"/><path class="z68qmysoe"/><path class="s3_8gac3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-pentagon"} {...others} />);
}

export default Component;
