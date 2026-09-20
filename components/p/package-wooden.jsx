import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/a/a3_ii9e6s.css';
import '../../css/q/q20sl4bij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="a3_ii9e6s"/><path class="q20sl4bij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:package-wooden"} {...others} />);
}

export default Component;
