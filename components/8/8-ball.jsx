import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4p62tssf.css';
import '../../css/h/hvsefo_2t.css';
import '../../css/q/qo_dlfbns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4p62tssf"/><path class="hvsefo_2t"/><path class="qo_dlfbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:8-ball"} {...others} />);
}

export default Component;
