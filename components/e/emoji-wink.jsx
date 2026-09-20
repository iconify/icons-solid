import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzy1ukxea.css';
import '../../css/a/a7dxfdctp.css';
import '../../css/b/btlc75bib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzy1ukxea"/><path clip-rule="evenodd" class="a7dxfdctp"/><path clip-rule="evenodd" class="btlc75bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:emoji-wink"} {...others} />);
}

export default Component;
