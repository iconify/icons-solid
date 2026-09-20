import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkv97o81o.css';
import '../../css/g/g1skskbus.css';
import '../../css/c/cveciqd7u.css';

const viewBox = {"width":496.6,"height":101.3};
const content = `<g class="kkv97o81o"><path class="g1skskbus"/><path class="cveciqd7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:playdate"} {...others} />);
}

export default Component;
