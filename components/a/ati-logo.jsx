import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p5xbsq8pg.css';
import '../../css/j/jgfk9hifv.css';
import '../../css/v/v7hoivwzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path clip-rule="evenodd" class="p5xbsq8pg"/><path class="jgfk9hifv"/><path clip-rule="evenodd" class="v7hoivwzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:ati-logo"} {...others} />);
}

export default Component;
