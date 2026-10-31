import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y44_4jbde.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y44_4jbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:asterisk-bulk-round"} {...others} />);
}

export default Component;
