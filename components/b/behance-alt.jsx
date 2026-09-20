import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmaox4uuj.css';
import '../../css/u/uxy6e-jmh.css';
import '../../css/b/bamdvlmwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmaox4uuj"/><path class="uxy6e-jmh"/><path class="bamdvlmwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:behance-alt"} {...others} />);
}

export default Component;
