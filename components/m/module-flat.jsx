import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvtop1btw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ws5p-pbkd.css';
import '../../css/a/a7hvicdlr.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVG01JF36rt" class="lvtop1btw"/></defs><g class="ft5dv1b6b"><use href="#SVG01JF36rt"/><use href="#SVG01JF36rt"/><path class="ws5p-pbkd"/><path class="a7hvicdlr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:module-flat"} {...others} />);
}

export default Component;
