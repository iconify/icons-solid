import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or5g61b_p.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="or5g61b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:carry-out-filled"} {...others} />);
}

export default Component;
