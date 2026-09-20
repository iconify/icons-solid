import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyebsfb6f.css';
import '../../css/a/a-7ym1bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eyebsfb6f"/><path class="a-7ym1bqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-people-user-check"} {...others} />);
}

export default Component;
