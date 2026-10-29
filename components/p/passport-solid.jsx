import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu6wyi_ja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gu6wyi_ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:passport-solid"} {...others} />);
}

export default Component;
