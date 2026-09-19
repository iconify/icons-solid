import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcu0spkpj.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="dcu0spkpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:circle-grid-3x3-fill"} {...others} />);
}

export default Component;
