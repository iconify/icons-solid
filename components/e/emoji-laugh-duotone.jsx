import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zibiadcci.css';
import '../../css/a/aq7z88bzf.css';
import '../../css/q/qtsxnt9xi.css';
import '../../css/b/btlc75bib.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zibiadcci"/><path class="aq7z88bzf"/><path clip-rule="evenodd" class="qtsxnt9xi"/><path clip-rule="evenodd" class="btlc75bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:emoji-laugh-duotone"} {...others} />);
}

export default Component;
