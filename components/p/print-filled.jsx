import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-ds1qb9a.css';
import '../../css/m/m45_auk8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-ds1qb9a"/><path class="m45_auk8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:print-filled"} {...others} />);
}

export default Component;
