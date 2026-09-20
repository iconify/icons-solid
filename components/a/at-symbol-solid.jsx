import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwy9wwbbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwy9wwbbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:at-symbol-solid"} {...others} />);
}

export default Component;
