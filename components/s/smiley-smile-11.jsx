import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/a/ah33g_b8l.css';
import '../../css/c/crcwzxbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="ah33g_b8l"/><path class="crcwzxbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smiley-smile-11"} {...others} />);
}

export default Component;
