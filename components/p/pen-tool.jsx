import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/a/a6fyc854u.css';
import '../../css/g/gur64ab5o.css';
import '../../css/p/pwltgsi8j.css';
import '../../css/a/a32feabld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="a6fyc854u"/><path class="gur64ab5o"/><path class="pwltgsi8j"/><path class="a32feabld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pen-tool"} {...others} />);
}

export default Component;
