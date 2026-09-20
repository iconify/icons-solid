import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eozj_aczo.css';
import '../../css/u/u5aprybjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eozj_aczo"/><path class="u5aprybjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:layers-bring-backward"} {...others} />);
}

export default Component;
