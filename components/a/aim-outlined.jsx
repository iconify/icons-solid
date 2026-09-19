import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trohwccmt.css';
import '../../css/e/eq354xb_i.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="trohwccmt"/><path class="eq354xb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:aim-outlined"} {...others} />);
}

export default Component;
