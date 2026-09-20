import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/z/zxdorvfhs.css';
import '../../css/w/wn6k-hbqx.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y555eiryf.css';
import '../../css/a/a0_8-cfnk.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGzgw7CdPx" width="12" height="15" x="6" y="8" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="zxdorvfhs"/><path class="wn6k-hbqx"/></mask><g class="ft5dv1b6b"><path mask="url(#SVGzgw7CdPx)" class="y555eiryf"/><path clip-rule="evenodd" class="a0_8-cfnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:storm"} {...others} />);
}

export default Component;
