import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh4nptbku.css';
import '../../css/t/ttzlj2nix.css';
import '../../css/z/zei7q3mej.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rh4nptbku"/><path class="ttzlj2nix"/><path class="zei7q3mej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-exchanger-20"} {...others} />);
}

export default Component;
