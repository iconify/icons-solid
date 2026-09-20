import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fl62xibad.css';
import '../../css/v/ve5wa3bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fl62xibad"/><path class="ve5wa3bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-storybook"} {...others} />);
}

export default Component;
