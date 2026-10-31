import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exdrxybls.css';
import '../../css/u/uwtui1bbw.css';
import '../../css/y/ymhw3xb4s.css';
import '../../css/q/qp7g17b6o.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="exdrxybls"/><path class="uwtui1bbw"/><path class="ymhw3xb4s"/><path class="qp7g17b6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:quinoa"} {...others} />);
}

export default Component;
