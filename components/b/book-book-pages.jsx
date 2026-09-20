import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ess0w888a.css';
import '../../css/h/ht3ffrbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ess0w888a"/><path class="ht3ffrbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:book-book-pages"} {...others} />);
}

export default Component;
