import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekc384f8f.css';
import '../../css/v/vgi-dbcnj.css';
import '../../css/b/b5atfim-k.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="ekc384f8f"/><path class="vgi-dbcnj"/><path clip-rule="evenodd" class="b5atfim-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:tip-jar-filled"} {...others} />);
}

export default Component;
