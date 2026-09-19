import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pom5f7b8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pom5f7b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hard-hat-filled"} {...others} />);
}

export default Component;
