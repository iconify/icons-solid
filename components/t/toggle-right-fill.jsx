import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmur6okjy.css';
import '../../css/z/zjsfxxucc.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="nmur6okjy"/><path class="zjsfxxucc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:toggle-right-fill"} {...others} />);
}

export default Component;
