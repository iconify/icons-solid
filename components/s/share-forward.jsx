import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5i_igbuz.css';
import '../../css/l/ldw2udbvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5i_igbuz"/><path class="ldw2udbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:share-forward"} {...others} />);
}

export default Component;
