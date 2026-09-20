import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/f/f4wj25bdx.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/f/f_i0uquls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="f4wj25bdx"/><path class="crcwzxbsf"/><path class="f_i0uquls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smiley-thinking"} {...others} />);
}

export default Component;
