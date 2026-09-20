import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/feamolb4d.css';
import '../../css/g/gp23u-b7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="feamolb4d"/><path class="gp23u-b7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:prism"} {...others} />);
}

export default Component;
