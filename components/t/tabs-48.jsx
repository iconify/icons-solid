import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar2h8rs6u.css';
import '../../css/f/fd1yhqbwh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ar2h8rs6u"/><path class="fd1yhqbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tabs-48"} {...others} />);
}

export default Component;
