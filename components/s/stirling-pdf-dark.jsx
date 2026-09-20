import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojldz2bdb.css';
import '../../css/e/ee089sbds.css';
import '../../css/o/os-6ceb3t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ojldz2bdb"/><path class="ee089sbds"/><path class="os-6ceb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stirling-pdf-dark"} {...others} />);
}

export default Component;
