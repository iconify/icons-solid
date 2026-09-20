import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jknao5mnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jknao5mnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-zero-or-one-to-only-one"} {...others} />);
}

export default Component;
