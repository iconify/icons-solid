import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_sovfbpg.css';
import '../../css/e/ebu29qyhz.css';
import '../../css/u/u7krydeao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f_sovfbpg"/><path class="ebu29qyhz"/><path class="u7krydeao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:podcast-filled"} {...others} />);
}

export default Component;
