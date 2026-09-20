import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl9hcebao.css';
import '../../css/j/j2vkrw2rq.css';
import '../../css/g/gv6tiib9t.css';
import '../../css/x/x7jcu8bha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="gl9hcebao"/><path class="j2vkrw2rq"/><path class="gv6tiib9t"/><path class="x7jcu8bha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:group"} {...others} />);
}

export default Component;
