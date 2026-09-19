import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqz-ogqhl.css';
import '../../css/a/a2nfcgrow.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="eqz-ogqhl"/><path class="a2nfcgrow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ca-4x3"} {...others} />);
}

export default Component;
