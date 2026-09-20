import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xwxmfbatx.css';
import '../../css/y/y5_drx-ko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xwxmfbatx"/><path class="y5_drx-ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:school"} {...others} />);
}

export default Component;
