import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhfxrxiwf.css';
import '../../css/o/o_zlcrb8j.css';
import '../../css/z/z75nfbbdm.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="qhfxrxiwf"/><rect class="o_zlcrb8j"/><path class="z75nfbbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:android"} {...others} />);
}

export default Component;
