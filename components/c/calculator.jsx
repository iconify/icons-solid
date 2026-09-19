import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm6l8ktey.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qm6l8ktey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:calculator"} {...others} />);
}

export default Component;
