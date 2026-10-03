import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjfaz3b4o.css';
import '../../css/c/c12j9pbpg.css';

const viewBox = {"width":300,"height":194.955};
const content = `<path class="yjfaz3b4o"/><path class="c12j9pbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:citibank"} {...others} />);
}

export default Component;
