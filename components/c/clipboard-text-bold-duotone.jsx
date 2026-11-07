import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo43we00a.css';
import '../../css/f/f521zmbvd.css';
import '../../css/u/u30xcbbdf.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo43we00a"/><path class="f521zmbvd"/><path class="u30xcbbdf"/><path class="c4946-17v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-text-bold-duotone"} {...others} />);
}

export default Component;
