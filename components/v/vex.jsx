import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd170tb4j.css';
import '../../css/x/xez906brx.css';
import '../../css/q/qtdg2bcei.css';
import '../../css/e/eua6i4aqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rd170tb4j"/><path class="xez906brx"/><path class="qtdg2bcei"/><path class="eua6i4aqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vex"} {...others} />);
}

export default Component;
