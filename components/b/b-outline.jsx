import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq1no1b7x.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="bq1no1b7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:b-outline"} {...others} />);
}

export default Component;
