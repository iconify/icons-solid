import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gol2f3bbo.css';
import '../../css/v/vb5ivabjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gol2f3bbo"/><path class="vb5ivabjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:hand-heart"} {...others} />);
}

export default Component;
