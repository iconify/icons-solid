import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8ajlyx7w.css';
import '../../css/o/oigar205c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b8ajlyx7w"/><path class="oigar205c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eject-duocolor-round"} {...others} />);
}

export default Component;
