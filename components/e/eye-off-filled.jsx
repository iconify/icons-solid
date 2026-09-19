import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skc1_tbgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="skc1_tbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:eye-off-filled"} {...others} />);
}

export default Component;
