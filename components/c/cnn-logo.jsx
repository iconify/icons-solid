import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/u5rdufb5j.css';
import '../../css/g/gs-_58bxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="u5rdufb5j"/><path class="gs-_58bxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:cnn-logo"} {...others} />);
}

export default Component;
