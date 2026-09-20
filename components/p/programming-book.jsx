import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wzh9s9ery.css';
import '../../css/n/n7pk_f8rx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wzh9s9ery"/><path class="n7pk_f8rx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:programming-book"} {...others} />);
}

export default Component;
