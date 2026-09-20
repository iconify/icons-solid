import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz73pfbjo.css';
import '../../css/k/kla3-hrzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zz73pfbjo"/><path class="kla3-hrzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:finger-press-fill"} {...others} />);
}

export default Component;
