import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a4jf0acco.css';
import '../../css/g/gbx0a2bnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a4jf0acco"/><rect class="gbx0a2bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:book-2"} {...others} />);
}

export default Component;
