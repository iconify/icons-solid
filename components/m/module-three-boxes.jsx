import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0tg69brx.css';
import '../../css/e/ed2t64tga.css';
import '../../css/f/fq7vapbgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0tg69brx"/><path class="ed2t64tga"/><path class="fq7vapbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:module-three-boxes"} {...others} />);
}

export default Component;
