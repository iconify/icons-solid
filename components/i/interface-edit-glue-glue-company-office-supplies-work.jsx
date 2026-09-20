import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idq7vmc7h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="idq7vmc7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-glue-glue-company-office-supplies-work"} {...others} />);
}

export default Component;
