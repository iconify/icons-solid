import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xo9bvn1yl.css';
import '../../css/q/qab9gx76z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="xo9bvn1yl"/><path class="qab9gx76z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:search"} {...others} />);
}

export default Component;
