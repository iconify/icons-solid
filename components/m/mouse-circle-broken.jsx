import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sa6gy3ztr.css';
import '../../css/n/n3fmk5byk.css';
import '../../css/b/b6enbdbml.css';
import '../../css/n/n5shqk82c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sa6gy3ztr"/><path class="n3fmk5byk"/><path class="b6enbdbml"/><path class="n5shqk82c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-circle-broken"} {...others} />);
}

export default Component;
