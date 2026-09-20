import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dknh6ga3x.css';
import '../../css/x/xnighxjdo.css';
import '../../css/d/dhfc635_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dknh6ga3x"/><path class="xnighxjdo"/><path class="dhfc635_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:google-drive"} {...others} />);
}

export default Component;
