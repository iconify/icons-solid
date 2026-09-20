import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz-uhfsal.css';
import '../../css/h/hn2o_abjx.css';
import '../../css/w/wdbpibcck.css';

const viewBox = {"width":4.233,"height":4.233};
const content = `<path class="pz-uhfsal"/><path class="hn2o_abjx"/><path class="wdbpibcck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:simulink"} {...others} />);
}

export default Component;
