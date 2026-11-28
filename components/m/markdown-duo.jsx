import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhtvuhbew.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zu8etlbik.css';
import '../../css/j/jgg7csooc.css';
import '../../css/y/yh9fwdbvj.css';
import '../../css/n/ndhnifpcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vhtvuhbew"/><g class="dt0cm9dhy primary"><path class="zu8etlbik"/><path class="jgg7csooc"/><path class="yh9fwdbvj"/><path class="ndhnifpcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:markdown-duo"} {...others} />);
}

export default Component;
