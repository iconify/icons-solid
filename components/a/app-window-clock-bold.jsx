import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty1e_gbpu.css';
import '../../css/a/aljx-nbqm.css';
import '../../css/i/iluxvyfjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ty1e_gbpu"/><path class="aljx-nbqm"/><path class="iluxvyfjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:app-window-clock-bold"} {...others} />);
}

export default Component;
