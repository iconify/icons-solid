import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tjg5knr1x.css';
import '../../css/a/ajyonabnb.css';
import '../../css/i/isy2lrdil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tjg5knr1x"/><path class="ajyonabnb"/><path class="isy2lrdil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:image-check-two-tone"} {...others} />);
}

export default Component;
