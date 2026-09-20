import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8yeuabmx.css';
import '../../css/o/olvwwtpsp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="u8yeuabmx"/><path class="olvwwtpsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:share-external-16"} {...others} />);
}

export default Component;
