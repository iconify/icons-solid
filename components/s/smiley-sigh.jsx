import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/d/dme7qxbek.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/s/s2im7n6ap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="dme7qxbek"/><path class="crcwzxbsf"/><path class="s2im7n6ap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smiley-sigh"} {...others} />);
}

export default Component;
