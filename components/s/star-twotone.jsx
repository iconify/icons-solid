import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flf817bsl.css';
import '../../css/u/ufhkon_xc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="flf817bsl"/><path class="ufhkon_xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:star-twotone"} {...others} />);
}

export default Component;
