import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1menc.css';
import '../../css/r/rtdw8m.css';
import '../../css/t/taf2xz.css';
import '../../css/b/bgw7ds.css';
import '../../css/h/hds10w.css';
import '../../css/b/botfzx.css';
import '../../css/s/s8e22g.css';
import '../../css/s/so-from-24.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGIsHtBd6M"><path class="r1menc rtdw8m taf2xz"/><path class="bgw7ds hds10w r1menc"/></mask></defs><path mask="url(#SVGIsHtBd6M)" class="botfzx"/><path class="hds10w r1menc s8e22g taf2xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:check-all"} {...others} />);
}

export default Component;
