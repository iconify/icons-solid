import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/votzz4x_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="votzz4x_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:let-s-encrypt"} {...others} />);
}

export default Component;
