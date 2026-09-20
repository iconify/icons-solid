import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ful0qxhpy.css';
import '../../css/r/r-fuctb7v.css';
import '../../css/z/z-iafr_mu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ful0qxhpy"/><path class="r-fuctb7v"/><path class="z-iafr_mu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:history-alt"} {...others} />);
}

export default Component;
