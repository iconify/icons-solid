import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyddhdbvg.css';
import '../../css/y/yr5bhhobf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="wyddhdbvg"/><path class="yr5bhhobf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:play-circle"} {...others} />);
}

export default Component;
