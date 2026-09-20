import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tp73kntxa.css';
import '../../css/a/a7_t46bcr.css';
import '../../css/a/ajx95yo6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tp73kntxa"/><path class="a7_t46bcr"/><path class="ajx95yo6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:switch-3"} {...others} />);
}

export default Component;
