import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/g/gr6dxfb2l.css';
import '../../css/j/jswongbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="gr6dxfb2l"/><path class="jswongbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:calendar"} {...others} />);
}

export default Component;
