import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/e/e4yzy_fnx.css';
import '../../css/t/tp1suz_1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="e4yzy_fnx"/><path class="tp1suz_1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:play-button"} {...others} />);
}

export default Component;
