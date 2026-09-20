import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scj5tm7an.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="scj5tm7an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:report-forms-line"} {...others} />);
}

export default Component;
