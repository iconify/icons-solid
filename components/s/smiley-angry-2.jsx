import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/y/ye153mmgp.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/i/iy4b5wbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="ye153mmgp"/><path class="crcwzxbsf"/><path class="iy4b5wbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smiley-angry-2"} {...others} />);
}

export default Component;
