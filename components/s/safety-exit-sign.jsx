import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwf7vacrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xwf7vacrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:safety-exit-sign"} {...others} />);
}

export default Component;
