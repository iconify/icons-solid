import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v57ckn.css';
import '../../css/l/lvinjf.css';
import '../../css/s/swsrfi.css';
import '../../css/h/hoafol.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-yqhc8a.css';
import '../../css/s/so-to-10.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG4hTeXcJA"><path class="v57ckn"/><path class="lvinjf swsrfi"/><path class="hoafol lvinjf"/></mask></defs><path mask="url(#SVG4hTeXcJA)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:tiktok"} {...others} />);
}

export default Component;
