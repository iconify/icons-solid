import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oej-_gbmt.css';
import '../../css/e/ezxsfzb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oej-_gbmt"/><path class="ezxsfzb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:business-contract-give-bold"} {...others} />);
}

export default Component;
