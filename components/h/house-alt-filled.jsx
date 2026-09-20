import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muph4f-qa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muph4f-qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:house-alt-filled"} {...others} />);
}

export default Component;
