import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqlclbcvx.css';
import '../../css/g/g5j-hk_bn.css';
import '../../css/t/tw5kz9gbt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="eqlclbcvx"/><path class="g5j-hk_bn"/><path class="tw5kz9gbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:comment-outlined"} {...others} />);
}

export default Component;
