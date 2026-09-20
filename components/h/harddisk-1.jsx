import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt2ugvhfn.css';
import '../../css/s/s3b9qwbnf.css';
import '../../css/f/f33zy7b8t.css';
import '../../css/z/zz3xy-b1z.css';
import '../../css/m/m2zkmqbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gt2ugvhfn"/><path class="s3b9qwbnf"/><path class="f33zy7b8t"/><path class="zz3xy-b1z"/><path class="m2zkmqbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:harddisk-1"} {...others} />);
}

export default Component;
