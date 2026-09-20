import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ny6gt7vwd.css';
import '../../css/d/drwj9ibty.css';
import '../../css/y/yd2u-pb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ny6gt7vwd"/><path class="drwj9ibty"/><path class="yd2u-pb4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-left-down"} {...others} />);
}

export default Component;
