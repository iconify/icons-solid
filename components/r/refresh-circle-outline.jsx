import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccyzdizjg.css';
import '../../css/b/bfvy_zbha.css';
import '../../css/q/q1sggqbkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccyzdizjg"/><path class="bfvy_zbha"/><path clip-rule="evenodd" class="q1sggqbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-circle-outline"} {...others} />);
}

export default Component;
