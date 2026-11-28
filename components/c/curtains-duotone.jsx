import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to8wr5-fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary to8wr5-fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:curtains-duotone"} {...others} />);
}

export default Component;
