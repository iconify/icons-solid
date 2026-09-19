import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbgg8ow9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tbgg8ow9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:announcement-alt-01"} {...others} />);
}

export default Component;
