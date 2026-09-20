import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcx275bhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcx275bhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:asterisk-circle-solid"} {...others} />);
}

export default Component;
