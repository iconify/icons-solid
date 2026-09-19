import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr3r1xpmt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yr3r1xpmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-spreadsheet"} {...others} />);
}

export default Component;
