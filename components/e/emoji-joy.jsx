import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7z4v_blb.css';
import '../../css/j/jhodmt__j.css';
import '../../css/b/btlc75bib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u7z4v_blb"/><path clip-rule="evenodd" class="jhodmt__j"/><path clip-rule="evenodd" class="btlc75bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:emoji-joy"} {...others} />);
}

export default Component;
