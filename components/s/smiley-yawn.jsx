import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/c/cztw9pcrq.css';
import '../../css/c/c9jjrobsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="crcwzxbsf"/><path class="cztw9pcrq"/><path class="c9jjrobsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smiley-yawn"} {...others} />);
}

export default Component;
