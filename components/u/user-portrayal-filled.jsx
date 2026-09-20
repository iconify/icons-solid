import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua3jl-yvs.css';
import '../../css/q/q3ohsnbcz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ua3jl-yvs"/><path clip-rule="evenodd" class="q3ohsnbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:user-portrayal-filled"} {...others} />);
}

export default Component;
