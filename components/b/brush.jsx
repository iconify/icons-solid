import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/elm65w5ld.css';
import '../../css/s/ssbrkmrft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="elm65w5ld"/><path class="ssbrkmrft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brush"} {...others} />);
}

export default Component;
