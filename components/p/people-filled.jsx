import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpx5-6bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpx5-6bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:people-filled"} {...others} />);
}

export default Component;
