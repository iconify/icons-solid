import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wowg0tbut.css';
import '../../css/k/kqt1ogbeo.css';
import '../../css/h/h0-ybdbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wowg0tbut"/><path class="kqt1ogbeo"/><path class="h0-ybdbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:design-process-mouse-pen"} {...others} />);
}

export default Component;
