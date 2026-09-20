import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upoh5b8jj.css';
import '../../css/d/dca1hzb9h.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zvlp41bor.css';
import '../../css/e/el7kd0g5t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="upoh5b8jj"/><path class="dca1hzb9h"/><g class="jn8qy4bru"><path class="zvlp41bor"/><path class="el7kd0g5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:salt-mill"} {...others} />);
}

export default Component;
