import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jp-e3rbsw.css';
import '../../css/t/t24ymlb2t.css';
import '../../css/i/ihhlg4bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jp-e3rbsw"/><path class="t24ymlb2t"/><path class="ihhlg4bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-sparkle"} {...others} />);
}

export default Component;
