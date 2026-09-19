import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8dkqkb6f.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="n8dkqkb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:hand-point-right-fill"} {...others} />);
}

export default Component;
