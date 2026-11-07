import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe32f93df.css';
import '../../css/o/o-ejz-b0a.css';
import '../../css/q/qpcow5bvc.css';
import '../../css/z/z6blvu--y.css';
import '../../css/x/xvfra1b9t.css';
import '../../css/b/b0zeadx-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="qe32f93df"><path class="o-ejz-b0a"/><path class="qpcow5bvc"/><path class="z6blvu--y"/><path class="xvfra1b9t"/></g><path class="b0zeadx-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-2-bold-duotone"} {...others} />);
}

export default Component;
