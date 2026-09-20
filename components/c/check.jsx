import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw3rb4-fg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uw3rb4-fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:check"} {...others} />);
}

export default Component;
