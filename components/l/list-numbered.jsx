import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdo6aybas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdo6aybas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:list-numbered"} {...others} />);
}

export default Component;
