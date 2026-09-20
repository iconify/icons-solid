import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eirwd2-9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eirwd2-9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:monetization-mouse"} {...others} />);
}

export default Component;
