import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5lczrbjj.css';
import '../../css/w/w_gjrzbap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5lczrbjj"/><path class="w_gjrzbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-edit-bold"} {...others} />);
}

export default Component;
