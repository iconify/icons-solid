import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ugw1omula.css';
import '../../css/m/m5wsf8blc.css';
import '../../css/x/xjh3njbok.css';
import '../../css/f/f6x_p4ruw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ugw1omula"/><circle class="m5wsf8blc"/><circle class="xjh3njbok"/><path class="f6x_p4ruw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:share"} {...others} />);
}

export default Component;
