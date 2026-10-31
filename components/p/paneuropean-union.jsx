import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piivihhtn.css';
import '../../css/i/i28mt_bch.css';
import '../../css/c/cwdx-acsy.css';
import '../../css/g/greuegb1f.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="piivihhtn"/><path class="i28mt_bch"/><path class="cwdx-acsy"/><path class="greuegb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:paneuropean-union"} {...others} />);
}

export default Component;
