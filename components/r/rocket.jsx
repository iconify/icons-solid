import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztl5zacac.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};
const content = `<path class="ztl5zacac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:rocket"} {...others} />);
}

export default Component;
