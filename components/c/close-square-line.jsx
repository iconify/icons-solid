import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbanj-ttg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nbanj-ttg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:close-square-line"} {...others} />);
}

export default Component;
