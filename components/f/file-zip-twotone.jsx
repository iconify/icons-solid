import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xruktb97h.css';
import '../../css/c/czrbmi21p.css';
import '../../css/i/igyl9v99d.css';
import '../../css/o/osn79cbkl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xruktb97h"/><path class="czrbmi21p"/><path class="igyl9v99d"/><path class="osn79cbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-zip-twotone"} {...others} />);
}

export default Component;
