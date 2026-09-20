import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eady710yy.css';
import '../../css/i/i6lq1nbgv.css';
import '../../css/a/adi563bmp.css';
import '../../css/y/yc7bf-7cx.css';
import '../../css/r/r2w4zvd5e.css';
import '../../css/r/rrtyxrb3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eady710yy"/><path class="i6lq1nbgv"/><path class="adi563bmp"/><path class="yc7bf-7cx"/><path class="r2w4zvd5e"/><path class="rrtyxrb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pydanticai"} {...others} />);
}

export default Component;
