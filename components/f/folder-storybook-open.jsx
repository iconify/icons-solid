import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hwqg5tbfy.css';
import '../../css/w/wpfh7ntzs.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="hwqg5tbfy"/><path class="wpfh7ntzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-storybook-open"} {...others} />);
}

export default Component;
