import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtsccccab.css';
import '../../css/n/ny4lcvbjn.css';
import '../../css/f/fuw1m6-na.css';
import '../../css/p/p4vup8bmp.css';
import '../../css/q/qfssupjtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dtsccccab"/><path class="ny4lcvbjn"/><path class="fuw1m6-na"/><path class="p4vup8bmp"/><path class="qfssupjtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-code-edit"} {...others} />);
}

export default Component;
