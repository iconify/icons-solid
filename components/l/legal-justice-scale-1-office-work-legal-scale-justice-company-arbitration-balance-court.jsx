import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9whj-l1g.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="g9whj-l1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:legal-justice-scale-1-office-work-legal-scale-justice-company-arbitration-balance-court"} {...others} />);
}

export default Component;
