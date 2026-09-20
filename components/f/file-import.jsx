import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/o/o0s3prb3b.css';
import '../../css/h/h5i3i5jgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="o0s3prb3b"/><path class="h5i3i5jgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-import"} {...others} />);
}

export default Component;
