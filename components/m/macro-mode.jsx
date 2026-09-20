import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/u/uymji-b5s.css';
import '../../css/c/cwiea-93g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="uymji-b5s"/><path class="cwiea-93g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:macro-mode"} {...others} />);
}

export default Component;
