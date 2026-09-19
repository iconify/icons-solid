import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tozv2lbrl.css';
import '../../css/k/krpi41bzj.css';
import '../../css/w/w53f1mbdp.css';
import '../../css/b/bg879tbcy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tozv2lbrl"/><path class="krpi41bzj"/><path class="w53f1mbdp"/><path class="bg879tbcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:idcard-twotone"} {...others} />);
}

export default Component;
