import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtm_fmbjl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="mtm_fmbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:wallet-fill"} {...others} />);
}

export default Component;
