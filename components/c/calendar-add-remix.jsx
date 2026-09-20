import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrd1i7udq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qrd1i7udq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:calendar-add-remix"} {...others} />);
}

export default Component;
