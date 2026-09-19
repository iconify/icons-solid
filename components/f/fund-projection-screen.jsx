import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prq31rbnp.css';
import '../../css/u/u-0d80bqe.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="prq31rbnp"/><path class="u-0d80bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:fund-projection-screen"} {...others} />);
}

export default Component;
