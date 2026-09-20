import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bah20gb6v.css';

const viewBox = {"width":192,"height":192};
const content = `<path class="bah20gb6v x19hqcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:threads-light"} {...others} />);
}

export default Component;
