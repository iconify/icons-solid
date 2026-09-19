import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7ddr5vqy.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="g7ddr5vqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:black-sun-with-rays-small-filled"} {...others} />);
}

export default Component;
