import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b45tcn2fu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b45tcn2fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:windows"} {...others} />);
}

export default Component;
