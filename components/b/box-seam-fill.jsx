import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqq1ptbnl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cqq1ptbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-seam-fill"} {...others} />);
}

export default Component;
