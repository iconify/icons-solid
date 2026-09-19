import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xihc5gn2q.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/x/xm3f1qbyz.css';
import '../../css/o/o6j0-0h9i.css';
import '../../css/a/aishiubnq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xihc5gn2q"/><g class="n1mjunbsu"><circle class="xm3f1qbyz"/><circle class="o6j0-0h9i"/><circle class="aishiubnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:sms"} {...others} />);
}

export default Component;
