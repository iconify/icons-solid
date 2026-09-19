import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/z2o0ujiuj.css';
import '../../css/i/i18xl820u.css';
import '../../css/n/n2bughbkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="z2o0ujiuj"/><circle class="i18xl820u"/><path class="n2bughbkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:music-artist"} {...others} />);
}

export default Component;
