import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q10zoq2ps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q10zoq2ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:libreoffice-impress"} {...others} />);
}

export default Component;
