import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee582qb8o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ee582qb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:picnic-table-in-eaved-gabled-shelter"} {...others} />);
}

export default Component;
