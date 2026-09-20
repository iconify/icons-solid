import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg11e7bbh.css';
import '../../css/p/prb4-qbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tg11e7bbh"/><path class="prb4-qbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-advertising-audience-targer-user-bold"} {...others} />);
}

export default Component;
