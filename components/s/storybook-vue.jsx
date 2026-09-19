import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/okjnncxuc.css';
import '../../css/m/m9oqccces.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="okjnncxuc"/><path class="m9oqccces"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:storybook-vue"} {...others} />);
}

export default Component;
