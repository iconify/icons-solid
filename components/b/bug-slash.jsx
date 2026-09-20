import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tcbeiybdg.css';
import '../../css/c/c02hgdc7d.css';
import '../../css/a/a2wwsgbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tcbeiybdg"/><path class="c02hgdc7d"/><path class="a2wwsgbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bug-slash"} {...others} />);
}

export default Component;
