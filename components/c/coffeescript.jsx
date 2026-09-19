import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh0ih_lld.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="jh0ih_lld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:coffeescript"} {...others} />);
}

export default Component;
