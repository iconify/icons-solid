import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6z0rhxtt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6z0rhxtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ease-in-out-filled"} {...others} />);
}

export default Component;
