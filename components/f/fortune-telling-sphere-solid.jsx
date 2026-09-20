import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqu3fyexs.css';
import '../../css/b/b4mh51b7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqu3fyexs"/><path clip-rule="evenodd" class="b4mh51b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:fortune-telling-sphere-solid"} {...others} />);
}

export default Component;
