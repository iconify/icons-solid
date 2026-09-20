import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_-408ewl.css';
import '../../css/w/wk173bt9a.css';
import '../../css/f/f8njk2b6e.css';
import '../../css/y/yghja8-9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t_-408ewl"/><path clip-rule="evenodd" class="wk173bt9a"/><path clip-rule="evenodd" class="f8njk2b6e"/><path clip-rule="evenodd" class="yghja8-9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:definition-search-book-flat"} {...others} />);
}

export default Component;
