import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvhzp_tdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bvhzp_tdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:spinning"} {...others} />);
}

export default Component;
