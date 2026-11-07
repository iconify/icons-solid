import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/zawk6smbg.css';
import '../../css/y/ybuibgbim.css';
import '../../css/j/jvb942cft.css';
import '../../css/e/ed0wiac1a.css';
import '../../css/r/r-yhzdbvh.css';
import '../../css/t/td25c2bwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="zawk6smbg"/><path class="ybuibgbim"/></g><path class="jvb942cft"/><path class="ed0wiac1a"/><path class="r-yhzdbvh"/><path class="td25c2bwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-bold-duotone"} {...others} />);
}

export default Component;
