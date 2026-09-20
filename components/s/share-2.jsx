import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ugw1omula.css';
import '../../css/m/m5wsf8blc.css';
import '../../css/x/xjh3njbok.css';
import '../../css/x/xr_-4gbxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ugw1omula"/><circle class="m5wsf8blc"/><circle class="xjh3njbok"/><path class="xr_-4gbxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:share-2"} {...others} />);
}

export default Component;
