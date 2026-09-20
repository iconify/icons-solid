import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dise_5b_a.css';
import '../../css/h/hdbrksbtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dise_5b_a"/><path class="hdbrksbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:copy3"} {...others} />);
}

export default Component;
