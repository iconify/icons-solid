import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxqubt9lt.css';
import '../../css/s/six9-ebnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxqubt9lt"/><path class="six9-ebnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:wallet-alt"} {...others} />);
}

export default Component;
