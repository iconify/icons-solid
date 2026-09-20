import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ekzm7mbgd.css';
import '../../css/c/cqmb2skun.css';
import '../../css/h/hcum_-5kb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ekzm7mbgd"/><path class="cqmb2skun"/><path class="hcum_-5kb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:copy-success"} {...others} />);
}

export default Component;
