import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/s/s84s3qbyt.css';
import '../../css/h/hp9ls6unq.css';
import '../../css/h/h0135acfe.css';
import '../../css/v/vebw2ebpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="s84s3qbyt"/><path class="hp9ls6unq"/><path class="h0135acfe wm-shine"/><path class="vebw2ebpb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file"} {...others} />);
}

export default Component;
