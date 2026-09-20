import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1149j1wh.css';
import '../../css/g/gx4ah_6qi.css';
import '../../css/n/nc5jv0bhh.css';
import '../../css/a/a9vsgkbga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a1149j1wh"/><circle class="gx4ah_6qi"/><circle class="nc5jv0bhh"/><circle class="a9vsgkbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:sliders"} {...others} />);
}

export default Component;
