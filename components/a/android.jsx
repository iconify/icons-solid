import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8q9e4bsf.css';
import '../../css/m/mgi81ojmu.css';
import '../../css/n/nyrfs3b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8q9e4bsf"/><circle class="mgi81ojmu"/><circle class="nyrfs3b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:android"} {...others} />);
}

export default Component;
