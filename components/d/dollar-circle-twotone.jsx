import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/t/tw3byrbcp.css';
import '../../css/b/b6qqbxbne.css';
import '../../css/d/dspl_gbsw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="tw3byrbcp"/><path class="b6qqbxbne"/><path class="dspl_gbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dollar-circle-twotone"} {...others} />);
}

export default Component;
