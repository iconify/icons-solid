import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thaq9qlqs.css';
import '../../css/s/sofgq3blb.css';
import '../../css/m/my9q3qq-e.css';
import '../../css/z/zc9f6b2ga.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="thaq9qlqs"/><path clip-rule="evenodd" class="sofgq3blb"/><path class="my9q3qq-e"/><path clip-rule="evenodd" class="zc9f6b2ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:news-paper-flat"} {...others} />);
}

export default Component;
