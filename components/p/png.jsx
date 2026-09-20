import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piu2dnbsw.css';
import '../../css/q/qapg4nbep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="piu2dnbsw"/><path clip-rule="evenodd" class="qapg4nbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:png"} {...others} />);
}

export default Component;
