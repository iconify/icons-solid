import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcb3-fmrh.css';
import '../../css/w/w74cijboi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bcb3-fmrh"/><path class="w74cijboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:field-time"} {...others} />);
}

export default Component;
