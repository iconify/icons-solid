import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbvvc5y2r.css';
import '../../css/p/pugtge_xh.css';
import '../../css/z/zn2ui6aai.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tbvvc5y2r"/><path class="pugtge_xh"/><path class="zn2ui6aai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:usb-twotone"} {...others} />);
}

export default Component;
