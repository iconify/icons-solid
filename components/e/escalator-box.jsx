import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm9f6lmtb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nm9f6lmtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:escalator-box"} {...others} />);
}

export default Component;
