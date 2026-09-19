import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg1s3861r.css';

const viewBox = {"width":83,"height":82};
const content = `<path clip-rule="evenodd" class="rg1s3861r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:puzzle-piece-bold"} {...others} />);
}

export default Component;
