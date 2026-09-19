import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkcm9o7dz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tkcm9o7dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:hair-dryer"} {...others} />);
}

export default Component;
