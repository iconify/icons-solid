import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekiu8gmyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ekiu8gmyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:folder-user-line"} {...others} />);
}

export default Component;
