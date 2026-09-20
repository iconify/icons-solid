import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo98i2bnx.css';
import '../../css/t/tiid34lxq.css';
import '../../css/c/cus_5pahm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eo98i2bnx"/><path class="tiid34lxq"/><path class="cus_5pahm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:srk"} {...others} />);
}

export default Component;
