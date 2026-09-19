import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgq7b6bcw.css';
import '../../css/e/e4tknkl3j.css';
import '../../css/l/lwksadc0n.css';
import '../../css/m/m7-8bob_d.css';
import '../../css/p/p__2v6lge.css';
import '../../css/v/vcnm-646i.css';
import '../../css/f/f6u4zobks.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cgq7b6bcw"/><path class="e4tknkl3j"/><path class="lwksadc0n"/><path class="m7-8bob_d"/><path class="p__2v6lge"/><path class="vcnm-646i"/><path class="f6u4zobks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:macos"} {...others} />);
}

export default Component;
