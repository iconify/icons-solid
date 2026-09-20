import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu2-02xnt.css';
import '../../css/g/guj9oizuk.css';
import '../../css/s/s8o4tbb0a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xu2-02xnt"/><path class="guj9oizuk"/><path class="s8o4tbb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-send-flat"} {...others} />);
}

export default Component;
