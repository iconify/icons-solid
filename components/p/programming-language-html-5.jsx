import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gxe121bkm.css';
import '../../css/t/tubvicfaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gxe121bkm"/><path class="tubvicfaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:programming-language-html-5"} {...others} />);
}

export default Component;
