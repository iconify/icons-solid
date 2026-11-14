import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-wgo9jbw.css';
import '../../css/b/bdc1sdbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k-wgo9jbw"/><path class="bdc1sdbbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:estimate-02"} {...others} />);
}

export default Component;
