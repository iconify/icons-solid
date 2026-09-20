import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgbwqz.css';
import '../../css/m/m9pw8h.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGNgpFUEoj"><path class="hgbwqz"/><circle class="m9pw8h"/></mask></defs><path mask="url(#SVGNgpFUEoj)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:switch-off-filled"} {...others} />);
}

export default Component;
