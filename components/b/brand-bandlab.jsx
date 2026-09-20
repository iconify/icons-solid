import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-tnymbfx.css';
import '../../css/j/jr75xkezj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a-tnymbfx"/><path class="jr75xkezj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-bandlab"} {...others} />);
}

export default Component;
