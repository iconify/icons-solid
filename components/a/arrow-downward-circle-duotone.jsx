import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmnjdabrt.css';
import '../../css/o/odh8gnbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zmnjdabrt"/><path class="odh8gnbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:arrow-downward-circle-duotone"} {...others} />);
}

export default Component;
