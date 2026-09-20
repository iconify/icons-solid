import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcj7e4vyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xcj7e4vyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:briefcase-solid"} {...others} />);
}

export default Component;
