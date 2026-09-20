import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2oou5y1h.css';
import '../../css/j/joldrnb5i.css';
import '../../css/d/ds51e_7li.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g2oou5y1h"/><path class="joldrnb5i"/><path class="ds51e_7li"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earth-setting-bold"} {...others} />);
}

export default Component;
