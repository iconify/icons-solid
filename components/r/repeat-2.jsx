import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kilewob6b.css';
import '../../css/v/vaayiwb9p.css';
import '../../css/b/bclevdbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kilewob6b"/><path class="vaayiwb9p"/><path class="bclevdbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:repeat-2"} {...others} />);
}

export default Component;
