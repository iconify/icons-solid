import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmxyuhnqn.css';
import '../../css/r/relvolb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmxyuhnqn"/><path class="relvolb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:file-archive"} {...others} />);
}

export default Component;
