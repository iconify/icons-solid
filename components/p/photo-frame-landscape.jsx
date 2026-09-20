import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shhnvhbjh.css';
import '../../css/d/duhqzbmzv.css';
import '../../css/w/wsw23sbga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="shhnvhbjh"/><path class="duhqzbmzv"/><path class="wsw23sbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:photo-frame-landscape"} {...others} />);
}

export default Component;
