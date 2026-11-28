import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn3q9eaqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pn3q9eaqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-terminal-solid"} {...others} />);
}

export default Component;
