import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jo6gcdbvz.css';
import '../../css/f/fxv2pk0nn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jo6gcdbvz"/><path class="fxv2pk0nn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-star"} {...others} />);
}

export default Component;
