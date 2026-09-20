import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfeezi7xs.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cfeezi7xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:religion-shinto-religion-gate-culture-shinto-japan-japanese-shrine"} {...others} />);
}

export default Component;
