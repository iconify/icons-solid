import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1v2eibcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r1v2eibcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:projector-screen-fill"} {...others} />);
}

export default Component;
