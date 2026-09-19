import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/atnkskbuc.css';
import '../../css/r/ra0h9-09a.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="atnkskbuc"/><path class="ra0h9-09a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:envrc"} {...others} />);
}

export default Component;
