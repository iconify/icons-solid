import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew_sqqbsw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ew_sqqbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:vertical-left-outlined"} {...others} />);
}

export default Component;
