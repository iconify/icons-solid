import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/icsylv55k.css';
import '../../css/j/j1s00upki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="icsylv55k"/><path class="j1s00upki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:share-01"} {...others} />);
}

export default Component;
