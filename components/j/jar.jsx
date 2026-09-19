import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atdaxeb8x.css';
import '../../css/f/f8zhnzr9w.css';
import '../../css/h/hkp75obgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="atdaxeb8x"/><path class="f8zhnzr9w"/><path class="hkp75obgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:jar"} {...others} />);
}

export default Component;
