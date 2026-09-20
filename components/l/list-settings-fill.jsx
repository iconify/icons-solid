import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd7vs07pt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gd7vs07pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:list-settings-fill"} {...others} />);
}

export default Component;
