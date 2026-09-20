import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aa2hsw2fq.css';
import '../../css/s/spyz-bhkq.css';
import '../../css/f/fjfkz6bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aa2hsw2fq"/><path class="spyz-bhkq"/><path class="fjfkz6bwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:building-2"} {...others} />);
}

export default Component;
