import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y6s-iccgj.css';
import '../../css/u/ut17npbmw.css';
import '../../css/s/sw-657gek.css';
import '../../css/b/b80muqbhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y6s-iccgj"/><path class="ut17npbmw"/><path clip-rule="evenodd" class="sw-657gek"/><path clip-rule="evenodd" class="b80muqbhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hot-air-balloon-flat"} {...others} />);
}

export default Component;
