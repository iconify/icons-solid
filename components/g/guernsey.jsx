import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/y/yseqrvb7u.css';
import '../../css/y/y6mw4bcmk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="yseqrvb7u"/><path class="y6mw4bcmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:guernsey"} {...others} />);
}

export default Component;
